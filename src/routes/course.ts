import { FastifyInstance } from 'fastify';

import createCourseServices from '../services/course/create-course';
import getAllCourseServices from '../services/course/get-all-courses';
import courseByIdServices from '../services/course/course-by-id';
import updateCourse from '../services/course/update-course';
import deleteCourseServices from '../services/course/delete-course';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{ Body: any }>('/course', async (request, reply) => {
    const data = request.body;
    reply.code(200).send(await createCourseServices(fastify, data));
  });

  fastify.get('/courses', async (request, reply) => {
    reply.code(200).send(await getAllCourseServices(fastify));
  });

  fastify.get<{
    Params: {
      id: string;
    };
  }>('/courses/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await courseByIdServices(fastify, id));
  });

  fastify.put<{
    Params: {
      id: string;
    };
    Body: any;
  }>('/courses/:id', async (request, reply) => {
    const id = request.params.id;
    const data = request.body;
    reply.code(200).send(await updateCourse(fastify, id, data));
  });

  fastify.delete<{
    Params: {
      id: string;
    };
  }>('/courses/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await deleteCourseServices(fastify, id));
  })
};
