import { FastifyInstance } from 'fastify';
import {
  createStatusEnrollmentController,
  getAllStatusEnrollmentsController,
  getByIdStatusEnrollmentController,
  updateByIdStatusEnrollmentController,
  deleteByIdStatusEnrollmentController
} from '../controllers/status-enrollments';

export async function statusEnrollmentRoutes(fastify: FastifyInstance) {
  fastify.post('/statusEnrollment', createStatusEnrollmentController);
  fastify.get('/statusEnrollments', getAllStatusEnrollmentsController);
  fastify.get('/statusEnrollment/:id', getByIdStatusEnrollmentController);
  fastify.put('/statusEnrollment/:id', updateByIdStatusEnrollmentController);
  fastify.delete('/statusEnrollment/:id', deleteByIdStatusEnrollmentController);
}
