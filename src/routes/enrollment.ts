import { FastifyInstance } from 'fastify';
import { Enrollments } from '@prisma/client';

import {
  createEnrollmentService,
  getAllEnrollmentsService,
  enrollmentByIdService,
  updateEnrollmentService,
  deleteEnrollmentService
} from '../services/enrollment';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{ Body: Omit<Enrollments, 'id'> }>('/enrollment', async (request, reply) => {
    const data = request.body;
    reply.code(200).send(await createEnrollmentService(fastify, data));
  });

  fastify.get('/enrollments', async (request, reply) => {
    reply.code(200).send(await getAllEnrollmentsService(fastify));
  });

  fastify.get<{
    Params: {
      id: string;
    };
  }>('/enrollment/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await enrollmentByIdService(fastify, id));
  });

  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<Enrollments, 'id'>;
  }>('/enrollment/:id', async (request, reply) => {
    const id = request.params.id;
    const data = request.body;
    reply.code(200).send(await updateEnrollmentService(fastify, id, data));
  });

  fastify.delete<{
    Params: {
      id: string;
    };
  }>('/enrollment/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await deleteEnrollmentService(fastify, id));
  });
};
