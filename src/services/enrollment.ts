import { FastifyInstance } from 'fastify';
import { Enrollments } from '@prisma/client';
import {
  createEnrollmentRepository,
  getAllEnrollmentsRepository,
  enrollmentByIdRepository,
  updateEnrollmentRepository,
  deleteEnrollmentRepository
} from '../repositories/enrollment';

export async function createEnrollmentService(
  fastify: FastifyInstance,
  data: Omit<Enrollments, 'id'>
): Promise<Enrollments> {
  return await createEnrollmentRepository(fastify, data);
}

export async function getAllEnrollmentsService(fastify: FastifyInstance): Promise<Enrollments[]> {
  let enrollments;

  const cacheData = await fastify.redis.get('all-enrollments');

  if (cacheData) {
    enrollments = JSON.parse(cacheData);
  } else {
    enrollments = await getAllEnrollmentsRepository(fastify);
    fastify.redis.set('all-enrollments', JSON.stringify(enrollments), 'EX', 60);
  }

  return enrollments;
}

export async function enrollmentByIdService(fastify: FastifyInstance, id: string): Promise<Enrollments> {
  return await enrollmentByIdRepository(fastify, id);
}

export async function updateEnrollmentService(
  fastify: FastifyInstance,
  id: string,
  data: Omit<Enrollments, 'id'>
): Promise<Enrollments> {
  return await updateEnrollmentRepository(fastify, id, data);
}

export async function deleteEnrollmentService(fastify: FastifyInstance, id: string): Promise<Enrollments> {
  return await deleteEnrollmentRepository(fastify, id);
}

export default {
  createEnrollmentService,
  getAllEnrollmentsService,
  enrollmentByIdService,
  updateEnrollmentService,
  deleteEnrollmentService
};
