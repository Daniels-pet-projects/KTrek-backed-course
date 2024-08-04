import { FastifyInstance } from 'fastify';
import {
  createCourseController,
  getAllCoursesController,
  getByIdCourseController,
  updateByIdCourseController,
  deleteByIdCourseController
} from '../controllers/courses';

export async function courseRoutes(fastify: FastifyInstance) {
  fastify.post('/course', createCourseController);
  fastify.get('/courses', getAllCoursesController);
  fastify.get('/course/:id', getByIdCourseController);
  fastify.put('/course/:id', updateByIdCourseController);
  fastify.delete('/course/:id', deleteByIdCourseController);
}
