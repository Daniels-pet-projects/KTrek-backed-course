import { FastifyInstance } from 'fastify';
import { status_enrollments } from '@prisma/client';
import {
  createStatusEnrollmentRepository,
  getAllStatusEnrollmentsRepository,
  statusEnrollmentByIdRepository,
  updateStatusEnrollmentRepository,
  deleteStatusEnrollmentRepository
} from '../repositories/status-enrollment';

export async function createStatusEnrollmentService(
  fastify: FastifyInstance,
  data: Omit<status_enrollments, 'id'>
): Promise<status_enrollments> {
  return await createStatusEnrollmentRepository(fastify, data);
}

export async function getAllStatusEnrollmentsService(fastify: FastifyInstance): Promise<status_enrollments[]> {
  let statusEnrollments;

  const cacheData = await fastify.redis.get('all-status-enrollments');

  if (cacheData) {
    statusEnrollments = JSON.parse(cacheData);
  } else {
    statusEnrollments = await getAllStatusEnrollmentsRepository(fastify);
    fastify.redis.set('all-status-enrollments', JSON.stringify(statusEnrollments), 'EX', 60);
  }

  return statusEnrollments;
}

export async function statusEnrollmentByIdService(fastify: FastifyInstance, id: string): Promise<status_enrollments> {
  return await statusEnrollmentByIdRepository(fastify, id);
}

export async function updateStatusEnrollmentService(
  fastify: FastifyInstance,
  id: string,
  data: Omit<status_enrollments, 'id'>
): Promise<status_enrollments> {
  return await updateStatusEnrollmentRepository(fastify, id, data);
}

export async function deleteStatusEnrollmentService(fastify: FastifyInstance, id: string): Promise<status_enrollments> {
  return await deleteStatusEnrollmentRepository(fastify, id);
}

export default {
  createStatusEnrollmentService,
  getAllStatusEnrollmentsService,
  statusEnrollmentByIdService,
  updateStatusEnrollmentService,
  deleteStatusEnrollmentService
};
