import { FastifyInstance } from 'fastify';
import { Lessons } from '@prisma/client';

import {
  createLessonService,
  getAllLessonsService,
  lessonByIdService,
  updateLessonService,
  deleteLessonService
} from '../services/lesson';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{ Body: Omit<Lessons, 'id'> }>('/lesson', async (request, reply) => {
    const data = request.body;
    reply.code(200).send(await createLessonService(fastify, data));
  });

  fastify.get('/Lessons', async (request, reply) => {
    reply.code(200).send(await getAllLessonsService(fastify));
  });

  fastify.get<{
    Params: {
      id: string;
    };
  }>('/lesson/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await lessonByIdService(fastify, id));
  });

  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<Lessons, 'id'>;
  }>('/lesson/:id', async (request, reply) => {
    const id = request.params.id;
    const data = request.body;
    reply.code(200).send(await updateLessonService(fastify, id, data));
  });

  fastify.delete<{
    Params: {
      id: string;
    };
  }>('/lesson/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await deleteLessonService(fastify, id));
  });
};
