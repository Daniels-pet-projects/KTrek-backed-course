import { FastifyInstance } from 'fastify';
import { lessons } from '@prisma/client';
import {
  createLessonRepository,
  getAllLessonsRepository,
  lessonByIdRepository,
  updateLessonRepository,
  deleteLessonRepository
} from '../repositories/lesson';

export async function createLessonService(
  fastify: FastifyInstance,
  data: Omit<lessons, 'id'>
): Promise<lessons> {
  return await createLessonRepository(fastify, data);
}

export async function getAllLessonsService(fastify: FastifyInstance): Promise<lessons[]> {
  let lessons;

  const cacheData = await fastify.redis.get('all-lessons');

  if (cacheData) {
    lessons = JSON.parse(cacheData);
  } else {
    lessons = await getAllLessonsRepository(fastify);
    fastify.redis.set('all-lessons', JSON.stringify(lessons), 'EX', 60);
  }

  return lessons;
}

export async function lessonByIdService(fastify: FastifyInstance, id: string): Promise<lessons> {
  return await lessonByIdRepository(fastify, id);
}

export async function updateLessonService(
  fastify: FastifyInstance,
  id: string,
  data: Omit<lessons, 'id'>
): Promise<lessons> {
  return await updateLessonRepository(fastify, id, data);
}

export async function deleteLessonService(fastify: FastifyInstance, id: string): Promise<lessons> {
  return await deleteLessonRepository(fastify, id);
}

export default {
  createLessonService,
  getAllLessonsService,
  lessonByIdService,
  updateLessonService,
  deleteLessonService
};
