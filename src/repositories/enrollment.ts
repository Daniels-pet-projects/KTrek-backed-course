import { FastifyInstance } from 'fastify';
import { enrollments } from '@prisma/client';

export async function createEnrollmentRepository(
  fastify: FastifyInstance,
  data: any // Omit<enrollments, 'id'>
): Promise<enrollments> {
  const enrollment = await fastify.prisma.enrollments.create({ data });

  return enrollment;
}

export async function getAllEnrollmentsRepository(fastify: FastifyInstance): Promise<enrollments[]> {
  const enrollments = await fastify.prisma.enrollments.findMany();

  return enrollments;
}

export async function enrollmentByIdRepository(fastify: FastifyInstance, id: string): Promise<enrollments> {
  const enrollment = await fastify.prisma.enrollments.findUnique({
    where: {
      id
    }
  });

  return enrollment;
}

export async function updateEnrollmentRepository(
  fastify: FastifyInstance,
  id: string,
  data: Omit<enrollments, 'id'>
): Promise<enrollments> {
  const updatedEnrollment = await fastify.prisma.enrollments.update({
    where: { id },
    data
  });

  return updatedEnrollment;
}

export async function deleteEnrollmentRepository(fastify: FastifyInstance, id: string): Promise<any> {
  // Promise<enrollments>
  const enrollment = await fastify.prisma.enrollments.deleteMany({ where: { id } });

  return enrollment;
}

export default {
  createEnrollmentRepository,
  getAllEnrollmentsRepository,
  enrollmentByIdRepository,
  updateEnrollmentRepository,
  deleteEnrollmentRepository
};
