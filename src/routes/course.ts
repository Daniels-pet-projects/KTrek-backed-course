import { FastifyInstance } from 'fastify';
import { Courses } from '@prisma/client';

import {
  createCourseService,
  getAllCoursesService,
  courseByIdService,
  updateCourseService,
  deleteCourseService
} from '../services/course';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{ Body: Omit<Courses, 'id'> }>('/course', async (request, reply) => {
    const data = request.body;
    reply.code(200).send(await createCourseService(fastify, data));
  });

  fastify.get('/courses', async (request, reply) => {
    reply.code(200).send(await getAllCoursesService(fastify));
  });

  fastify.get<{
    Params: {
      id: string;
    };
  }>('/courses/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await courseByIdService(fastify, id));
  });

  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<Courses, 'id'>;
  }>('/courses/:id', async (request, reply) => {
    const id = request.params.id;
    const data = request.body;
    reply.code(200).send(await updateCourseService(fastify, id, data));
  });

  fastify.delete<{
    Params: {
      id: string;
    };
  }>('/courses/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await deleteCourseService(fastify, id));
  });
};
