import { FastifyInstance } from 'fastify';
import { Courses } from '@prisma/client';

export async function createCourseRepository(
  fastify: FastifyInstance,
  data: Omit<Courses, 'id'>
): Promise<Courses> {
  const course = await fastify.prisma.courses.create({
    data
  });

  return course;
}

export async function getAllCoursesRepository(fastify: FastifyInstance): Promise<Courses[]> {
  const Courses = await fastify.prisma.courses.findMany();

  return Courses;
}

export async function courseByIdRepository(fastify: FastifyInstance, id: string): Promise<Courses> {
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
  data: Omit<Courses, 'id'>
): Promise<Courses> {
  const updatedCourse = await fastify.prisma.courses.update({
    where: { id },
    data
  });

  return updatedCourse;
}

export async function deleteCourseRepository(fastify: FastifyInstance, id: string): Promise<Courses> {
  const course = await fastify.prisma.courses.delete({ where: { id } });

  return course;
}

export default {
  createCourseRepository,
  getAllCoursesRepository,
  courseByIdRepository,
  updateCourseRepository,
  deleteCourseRepository
};
