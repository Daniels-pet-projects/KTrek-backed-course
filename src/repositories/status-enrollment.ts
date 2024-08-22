import { FastifyInstance } from 'fastify';
import { StatusEnrollments } from '@prisma/client';

export async function createStatusEnrollmentRepository(
  fastify: FastifyInstance,
  data: Omit<StatusEnrollments, 'id'>
): Promise<StatusEnrollments> {
  const course = await fastify.prisma.statusEnrollments.create({
    data
  });

  return course;
}

export async function getAllStatusEnrollmentsRepository(fastify: FastifyInstance): Promise<StatusEnrollments[]> {
  const StatusEnrollments = await fastify.prisma.statusEnrollments.findMany();

  return StatusEnrollments;
}

export async function statusEnrollmentByIdRepository(
  fastify: FastifyInstance,
  id: string
): Promise<StatusEnrollments> {
  const course = await fastify.prisma.statusEnrollments.findUnique({
    where: {
      id
    }
  });

  return course;
}

export async function updateStatusEnrollmentRepository(
  fastify: FastifyInstance,
  id: string,
  data: Omit<StatusEnrollments, 'id'>
): Promise<StatusEnrollments> {
  const updatedCourse = await fastify.prisma.statusEnrollments.update({
    where: { id },
    data
  });

  return updatedCourse;
}

export async function deleteStatusEnrollmentRepository(
  fastify: FastifyInstance,
  id: string
): Promise<StatusEnrollments> {
  const course = await fastify.prisma.statusEnrollments.delete({ where: { id } });

  return course;
}

export default {
  createStatusEnrollmentRepository,
  getAllStatusEnrollmentsRepository,
  statusEnrollmentByIdRepository,
  updateStatusEnrollmentRepository,
  deleteStatusEnrollmentRepository
};
