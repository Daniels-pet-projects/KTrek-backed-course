import { FastifyInstance } from 'fastify';
import { Courses } from '@prisma/client';
import {
  createCourseRepository,
  getAllCoursesRepository,
  courseByIdRepository,
  updateCourseRepository,
  deleteCourseRepository
} from '../repositories/course';

export async function createCourseService(
  fastify: FastifyInstance,
  data: Omit<Courses, 'id'>
): Promise<Courses> {
  return await createCourseRepository(fastify, data);
}

export async function getAllCoursesService(fastify: FastifyInstance): Promise<Courses[]> {
  let courses;

  const cacheData = await fastify.redis.get('all-courses');

  if (cacheData) {
    courses = JSON.parse(cacheData);
  } else {
    courses = await getAllCoursesRepository(fastify);
    fastify.redis.set('all-courses', JSON.stringify(courses), 'EX', 60);
  }

  return courses;
}

export async function courseByIdService(fastify: FastifyInstance, id: string): Promise<Courses> {
  return await courseByIdRepository(fastify, id);
}

export async function updateCourseService(
  fastify: FastifyInstance,
  id: string,
  data: Omit<Courses, 'id'>
): Promise<Courses> {
  return await updateCourseRepository(fastify, id, data);
}

export async function deleteCourseService(fastify: FastifyInstance, id: string): Promise<Courses> {
  return await deleteCourseRepository(fastify, id);
}

export default {
  createCourseService,
  getAllCoursesService,
  courseByIdService,
  updateCourseService,
  deleteCourseService
};
