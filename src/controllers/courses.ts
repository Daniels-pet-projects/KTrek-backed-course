import { FastifyRequest, FastifyReply } from 'fastify';
import {
  createCourseServices,
  getAllCoursesServices,
  getByIdCourseServices,
  updateByIdCourseServices,
  deleteByIdCourseServices
} from '../services/courses';

// Определите типы для параметров запроса и тела запроса
type CourseParams = {
  id: string;
};

type CourseBody = {
  title: string;
  description: string;
  // Добавьте другие свойства курса здесь
};

export const createCourseController = async (
  request: FastifyRequest<{ Body: CourseBody }>,
  reply: FastifyReply
) => {
  const courseData = request.body;
  const course = await createCourseServices(courseData);
  reply.send({ message: course });
};

export const getAllCoursesController = async (request: FastifyRequest, reply: FastifyReply) => {
  const courses = await getAllCoursesServices();
  reply.send({ message: courses });
};

export const getByIdCourseController = async (
  request: FastifyRequest<{ Params: CourseParams }>,
  reply: FastifyReply
) => {
  const courseId = request.params.id;
  const course = await getByIdCourseServices(courseId);
  reply.send({ message: course });
};

export const updateByIdCourseController = async (
  request: FastifyRequest<{ Params: CourseParams; Body: CourseBody }>,
  reply: FastifyReply
) => {
  const courseId = request.params.id;
  const courseData = request.body;
  const course = await updateByIdCourseServices(courseId, courseData);
  reply.send({ message: course });
};

export const deleteByIdCourseController = async (
  request: FastifyRequest<{ Params: CourseParams }>,
  reply: FastifyReply
) => {
  const courseId = request.params.id;
  const course = await deleteByIdCourseServices(courseId);
  reply.send({ message: course });
};
