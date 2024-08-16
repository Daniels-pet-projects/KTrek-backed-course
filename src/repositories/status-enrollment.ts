import { FastifyInstance } from 'fastify';
import { status_enrollments } from '@prisma/client';

export async function createStatusEnrollmentRepository(
  fastify: FastifyInstance,
  data: any // Omit<status_enrollments, 'id'>
): Promise<status_enrollments> {
  const statusEnrollment = await fastify.prisma.status_enrollments.create({ data });

  return statusEnrollment;
}

export async function getAllStatusEnrollmentsRepository(fastify: FastifyInstance): Promise<status_enrollments[]> {
  const statusEnrollments = await fastify.prisma.status_enrollments.findMany();

  return statusEnrollments;
}

export async function statusEnrollmentByIdRepository(fastify: FastifyInstance, id: string): Promise<status_enrollments> {
  const statusEnrollment = await fastify.prisma.status_enrollments.findUnique({
    where: {
      id
    }
  });

  return statusEnrollment;
}

export async function updateStatusEnrollmentRepository(
  fastify: FastifyInstance,
  id: string,
  data: Omit<status_enrollments, 'id'>
): Promise<status_enrollments> {
  const updatedStatusEnrollment = await fastify.prisma.status_enrollments.update({
    where: { id },
    data
  });

  return updatedStatusEnrollment;
}

export async function deleteStatusEnrollmentRepository(fastify: FastifyInstance, id: string): Promise<any> {
  // Promise<status_enrollments>
  const statusEnrollment = await fastify.prisma.status_enrollments.deleteMany({ where: { id } });

  return statusEnrollment;
}

export default {
  createStatusEnrollmentRepository,
  getAllStatusEnrollmentsRepository,
  statusEnrollmentByIdRepository,
  updateStatusEnrollmentRepository,
  deleteStatusEnrollmentRepository
};
