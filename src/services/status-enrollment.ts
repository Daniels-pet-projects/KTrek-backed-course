import { FastifyInstance } from 'fastify';
import { StatusEnrollments } from '@prisma/client';
import {
  createStatusEnrollmentRepository,
  getAllStatusEnrollmentsRepository,
  statusEnrollmentByIdRepository,
  updateStatusEnrollmentRepository,
  deleteStatusEnrollmentRepository
} from '../repositories/status-enrollment';

export async function createStatusEnrollmentService(
  fastify: FastifyInstance,
  data: Omit<StatusEnrollments, 'id'>
): Promise<StatusEnrollments> {
  return await createStatusEnrollmentRepository(fastify, data);
}

export async function getAllStatusEnrollmentsService(fastify: FastifyInstance): Promise<StatusEnrollments[]> {
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

export async function statusEnrollmentByIdService(fastify: FastifyInstance, id: string): Promise<StatusEnrollments> {
  return await statusEnrollmentByIdRepository(fastify, id);
}

export async function updateStatusEnrollmentService(
  fastify: FastifyInstance,
  id: string,
  data: Omit<StatusEnrollments, 'id'>
): Promise<StatusEnrollments> {
  return await updateStatusEnrollmentRepository(fastify, id, data);
}

export async function deleteStatusEnrollmentService(fastify: FastifyInstance, id: string): Promise<StatusEnrollments> {
  return await deleteStatusEnrollmentRepository(fastify, id);
}

export default {
  createStatusEnrollmentService,
  getAllStatusEnrollmentsService,
  statusEnrollmentByIdService,
  updateStatusEnrollmentService,
  deleteStatusEnrollmentService
};
