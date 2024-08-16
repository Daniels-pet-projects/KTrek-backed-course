import { FastifyInstance } from 'fastify';
import { lessons } from '@prisma/client';

export async function createLessonRepository(
  fastify: FastifyInstance,
  data: any // Omit<lessons, 'id'>
): Promise<lessons> {
  const lesson = await fastify.prisma.lessons.create({ data });

  return lesson;
}

export async function getAllLessonsRepository(fastify: FastifyInstance): Promise<lessons[]> {
  const lessons = await fastify.prisma.lessons.findMany();

  return lessons;
}

export async function lessonByIdRepository(fastify: FastifyInstance, id: string): Promise<lessons> {
  const lesson = await fastify.prisma.lessons.findUnique({
    where: {
      id
    }
  });

  return lesson;
}

export async function updateLessonRepository(
  fastify: FastifyInstance,
  id: string,
  data: Omit<lessons, 'id'>
): Promise<lessons> {
  const updatedLesson = await fastify.prisma.lessons.update({
    where: { id },
    data
  });

  return updatedLesson;
}

export async function deleteLessonRepository(fastify: FastifyInstance, id: string): Promise<any> {
  // Promise<lessons>
  const lesson = await fastify.prisma.lessons.deleteMany({ where: { id } });

  return lesson;
}

export default {
  createLessonRepository,
  getAllLessonsRepository,
  lessonByIdRepository,
  updateLessonRepository,
  deleteLessonRepository
};
