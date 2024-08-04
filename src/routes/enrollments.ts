import { FastifyInstance } from 'fastify';
import {
  createEnrollmentController,
  getAllEnrollmentsController,
  getByIdEnrollmentController,
  updateByIdEnrollmentController,
  deleteByIdEnrollmentController
} from '../controllers/enrollments';

export async function enrollmentRoutes(fastify: FastifyInstance) {
  fastify.post('/enrollment', createEnrollmentController);
  fastify.get('/enrollments', getAllEnrollmentsController);
  fastify.get('/enrollment/:id', getByIdEnrollmentController);
  fastify.put('/enrollment/:id', updateByIdEnrollmentController);
  fastify.delete('/enrollment/:id', deleteByIdEnrollmentController);
}
