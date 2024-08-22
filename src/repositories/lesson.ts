import { FastifyInstance } from 'fastify';
import { Lessons } from '@prisma/client';

export async function createLessonRepository(
  fastify: FastifyInstance,
  data: Omit<Lessons, 'id'>
): Promise<Lessons> {
  const lesson = await fastify.prisma.lessons.create({ data });

  return lesson;
}

export async function getAllLessonsRepository(fastify: FastifyInstance): Promise<Lessons[]> {
  const Lessons = await fastify.prisma.lessons.findMany();

  return Lessons;
}

export async function lessonByIdRepository(fastify: FastifyInstance, id: string): Promise<Lessons> {
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
  data: Omit<Lessons, 'id'>
): Promise<Lessons> {
  const updatedLesson = await fastify.prisma.lessons.update({
    where: { id },
    data
  });

  return updatedLesson;
}

export async function deleteLessonRepository(fastify: FastifyInstance, id: string): Promise<Lessons> {
  const lesson = await fastify.prisma.lessons.delete({ where: { id } });

  return lesson;
}

export default {
  createLessonRepository,
  getAllLessonsRepository,
  lessonByIdRepository,
  updateLessonRepository,
  deleteLessonRepository
};
