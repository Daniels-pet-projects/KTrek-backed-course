import { FastifyInstance } from 'fastify';
import { courses } from '@prisma/client';

export async function createCourseRepository(
  fastify: FastifyInstance,
  data: any // Omit<courses, 'id'>
): Promise<courses> {
  const course = await fastify.prisma.courses.create({ data });

  return course;
}

export async function getAllCoursesRepository(fastify: FastifyInstance): Promise<courses[]> {
  const courses = await fastify.prisma.courses.findMany();

  return courses;
}

export async function courseByIdRepository(fastify: FastifyInstance, id: string): Promise<courses> {
  const course = await fastify.prisma.courses.findUnique({
    where: {
      id
    }
  });

  return course;
}

export async function updateCourseRepository(
  fastify: FastifyInstance,
  id: string,
  data: Omit<courses, 'id'>
): Promise<courses> {
  const updatedCourse = await fastify.prisma.courses.update({
    where: { id },
    data
  });

  return updatedCourse;
}

export async function deleteCourseRepository(fastify: FastifyInstance, id: string): Promise<any> { // Promise<courses>
  const course = await fastify.prisma.courses.deleteMany({ where: { id } });

  return course;
}

export default {
  createCourseRepository,
  getAllCoursesRepository,
  courseByIdRepository,
  updateCourseRepository,
  deleteCourseRepository
};
