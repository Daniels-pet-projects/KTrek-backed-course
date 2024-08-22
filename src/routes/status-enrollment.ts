import { FastifyInstance } from 'fastify';
import { StatusEnrollments } from '@prisma/client';

import {
  createStatusEnrollmentService,
  getAllStatusEnrollmentsService,
  statusEnrollmentByIdService,
  updateStatusEnrollmentService,
  deleteStatusEnrollmentService
} from '../services/status-enrollment';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{ Body: Omit<StatusEnrollments, 'id'> }>('/statusEnrollment', async (request, reply) => {
    const data = request.body;
    reply.code(200).send(await createStatusEnrollmentService(fastify, data));
  });

  fastify.get('/statusEnrollments', async (request, reply) => {
    reply.code(200).send(await getAllStatusEnrollmentsService(fastify));
  });

  fastify.get<{
    Params: {
      id: string;
    };
  }>('/statusEnrollments/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await statusEnrollmentByIdService(fastify, id));
  });

  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<StatusEnrollments, 'id'>;
  }>('/statusEnrollments/:id', async (request, reply) => {
    const id = request.params.id;
    const data = request.body;
    reply.code(200).send(await updateStatusEnrollmentService(fastify, id, data));
  });

  fastify.delete<{
    Params: {
      id: string;
    };
  }>('/statusEnrollments/:id', async (request, reply) => {
    const id = request.params.id;
    reply.code(200).send(await deleteStatusEnrollmentService(fastify, id));
  });
};
