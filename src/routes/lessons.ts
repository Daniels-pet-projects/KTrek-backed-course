import { Lessons } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import {
  createLessonController,
  // getAllLessonsController,
  getByIdLessonController,
  updateByIdLessonController,
  deleteByIdLessonController
} from '../services/lessons';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{ Body: Omit<Lessons, 'id'> }>('/lesson', createLessonController);
  // fastify.get('/lessons', getAllLessonsController);
  fastify.get<{ Params: { id: string } }>('/lesson/:id', getByIdLessonController);
  fastify.put<{ Params: { id: string }; Body: Omit<Lessons, 'id'> }>('/lesson/:id', updateByIdLessonController);
  fastify.delete<{ Params: { id: string } }>('/lesson/:id', deleteByIdLessonController);
};
