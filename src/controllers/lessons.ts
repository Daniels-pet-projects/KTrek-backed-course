import { FastifyRequest, FastifyReply } from 'fastify';
import {
  createLessonServices,
  getAllLessonsServices,
  getByIdLessonServices,
  updateByIdLessonServices,
  deleteByIdLessonServices
} from '../services/lessons';

// Типы для параметров и тела запроса
type LessonParams = { id: string };
type LessonBody = {
  title: string;
  content: string;
  // добавьте другие свойства урока здесь
};

export const createLessonController = async (
  request: FastifyRequest<{ Body: LessonBody }>,
  reply: FastifyReply
) => {
  const lessonData = request.body;
  const lesson = await createLessonServices(lessonData);
  reply.send({ message: lesson });
};

export const getAllLessonsController = async (request: FastifyRequest, reply: FastifyReply) => {
  const lessons = await getAllLessonsServices();
  reply.send({ message: lessons });
};

export const getByIdLessonController = async (
  request: FastifyRequest<{ Params: LessonParams }>,
  reply: FastifyReply
) => {
  const lessonId = request.params.id;
  const lesson = await getByIdLessonServices(lessonId);
  reply.send({ message: lesson });
};

export const updateByIdLessonController = async (
  request: FastifyRequest<{ Params: LessonParams; Body: LessonBody }>,
  reply: FastifyReply
) => {
  const lessonId = request.params.id;
  const lessonData = request.body;
  const lesson = await updateByIdLessonServices(lessonId, lessonData);
  reply.send({ message: lesson });
};

export const deleteByIdLessonController = async (
  request: FastifyRequest<{ Params: LessonParams }>,
  reply: FastifyReply
) => {
  const lessonId = request.params.id;
  const lesson = await deleteByIdLessonServices(lessonId);
  reply.send({ message: lesson });
};
