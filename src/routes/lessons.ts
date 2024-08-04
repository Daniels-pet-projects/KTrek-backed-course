import { FastifyInstance } from 'fastify';
import {
  createLessonController,
  getAllLessonsController,
  getByIdLessonController,
  updateByIdLessonController,
  deleteByIdLessonController
} from '../controllers/lessons';

export async function lessonRoutes(fastify: FastifyInstance) {
  fastify.post('/lesson', createLessonController);
  fastify.get('/lessons', getAllLessonsController);
  fastify.get('/lesson/:id', getByIdLessonController);
  fastify.put('/lesson/:id', updateByIdLessonController);
  fastify.delete('/lesson/:id', deleteByIdLessonController);
}
