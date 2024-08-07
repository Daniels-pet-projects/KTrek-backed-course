import { Courses } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import {
  createCourseController,
  // getAllCoursesController,
  getByIdCourseController,
  updateByIdCourseController,
  deleteByIdCourseController
} from '../services/courses';
import { coursesParamsIdRequestSchema, coursesBodyRequestSchema } from '../schemas/request/courses';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{ Body: Omit<Courses, 'id'> }>(
    '/course',
    { schema: { ...coursesBodyRequestSchema } },
    createCourseController
  );

  // fastify.get('/courses', getAllCoursesController);

  fastify.get<{ Params: { id: string } }>(
    '/course/:id',
    { schema: { ...coursesParamsIdRequestSchema } },
    getByIdCourseController
  );

  fastify.put<{ Params: { id: string }; Body: Omit<Courses, 'id'> }>(
    '/course/:id',
    { schema: { ...coursesParamsIdRequestSchema, ...coursesBodyRequestSchema } },
    updateByIdCourseController
  );

  fastify.delete<{ Params: { id: string } }>(
    '/course/:id',
    { schema: { ...coursesParamsIdRequestSchema } },
    deleteByIdCourseController
  );
};
