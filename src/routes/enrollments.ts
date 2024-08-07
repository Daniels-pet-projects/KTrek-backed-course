import { Enrollments } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import {
  createEnrollmentController,
  // getAllEnrollmentsController,
  getByIdEnrollmentController,
  updateByIdEnrollmentController,
  deleteByIdEnrollmentController
} from '../services/enrollments';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{ Body: Omit<Enrollments, 'id'> }>('/enrollment', createEnrollmentController);
  // fastify.get('/enrollments', getAllEnrollmentsController);
  fastify.get<{ Params: { id: string } }>('/enrollment/:id', getByIdEnrollmentController);
  fastify.put<{ Params: { id: string }; Body: Omit<Enrollments, 'id'> }>('/enrollment/:id', updateByIdEnrollmentController);
  fastify.delete<{ Params: { id: string } }>('/enrollment/:id', deleteByIdEnrollmentController);
};
