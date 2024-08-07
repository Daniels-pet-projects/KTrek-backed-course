import { StatusEnrollments } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import {
  createStatusEnrollmentController,
  // getAllStatusEnrollmentsController,
  getByIdStatusEnrollmentController,
  updateByIdStatusEnrollmentController,
  deleteByIdStatusEnrollmentController
} from '../services/status-enrollments';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{ Body: Omit<StatusEnrollments, 'id'> }>('/statusEnrollment', createStatusEnrollmentController);
  // fastify.get('/statusEnrollments', getAllStatusEnrollmentsController);
  fastify.get<{ Params: { id: string } }>('/statusEnrollment/:id', getByIdStatusEnrollmentController);
  fastify.put<{ Params: { id: string }; Body: Omit<StatusEnrollments, 'id'> }>('/statusEnrollment/:id', updateByIdStatusEnrollmentController);
  fastify.delete<{ Params: { id: string } }>('/statusEnrollment/:id', deleteByIdStatusEnrollmentController);
};
