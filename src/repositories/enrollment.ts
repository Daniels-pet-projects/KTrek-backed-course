import { FastifyInstance } from 'fastify';
import { Enrollments } from '@prisma/client';

export async function createEnrollmentRepository(
  fastify: FastifyInstance,
  data: Omit<Enrollments, 'id'>
): Promise<Enrollments> {
  const enrollment = await fastify.prisma.enrollments.create({ data });

  return enrollment;
}

export async function getAllEnrollmentsRepository(fastify: FastifyInstance): Promise<Enrollments[]> {
  const Enrollments = await fastify.prisma.enrollments.findMany();

  return Enrollments;
}

export async function enrollmentByIdRepository(fastify: FastifyInstance, id: string): Promise<Enrollments> {
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
  data: Omit<Enrollments, 'id'>
): Promise<Enrollments> {
  const updatedEnrollment = await fastify.prisma.enrollments.update({
    where: { id },
    data
  });

  return updatedEnrollment;
}

export async function deleteEnrollmentRepository(fastify: FastifyInstance, id: string): Promise<Enrollments> {
  const enrollment = await fastify.prisma.enrollments.delete({ where: { id } });

  return enrollment;
}

export default {
  createEnrollmentRepository,
  getAllEnrollmentsRepository,
  enrollmentByIdRepository,
  updateEnrollmentRepository,
  deleteEnrollmentRepository
};
