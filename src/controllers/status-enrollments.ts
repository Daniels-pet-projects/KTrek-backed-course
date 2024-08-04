import { FastifyRequest, FastifyReply } from 'fastify';
import {
  createStatusEnrollmentServices,
  getAllStatusEnrollmentsServices,
  getByIdStatusEnrollmentServices,
  updateByIdStatusEnrollmentServices,
  deleteByIdStatusEnrollmentServices
} from '../services/status-enrollments';

// Типы для параметров и тела запроса
type StatusEnrollmentParams = { id: string };
type StatusEnrollmentBody = {
  status: string;
  description: string;
  // добавьте другие свойства статуса записи здесь
};

export const createStatusEnrollmentController = async (
  request: FastifyRequest<{ Body: StatusEnrollmentBody }>,
  reply: FastifyReply
) => {
  const statusEnrollmentData = request.body;
  const statusEnrollment = await createStatusEnrollmentServices(statusEnrollmentData);
  reply.send({ message: statusEnrollment });
};

export const getAllStatusEnrollmentsController = async (request: FastifyRequest, reply: FastifyReply) => {
  const statusEnrollments = await getAllStatusEnrollmentsServices();
  reply.send({ message: statusEnrollments });
};

export const getByIdStatusEnrollmentController = async (
  request: FastifyRequest<{ Params: StatusEnrollmentParams }>,
  reply: FastifyReply
) => {
  const statusEnrollmentId = request.params.id;
  const statusEnrollment = await getByIdStatusEnrollmentServices(statusEnrollmentId);
  reply.send({ message: statusEnrollment });
};

export const updateByIdStatusEnrollmentController = async (
  request: FastifyRequest<{ Params: StatusEnrollmentParams; Body: StatusEnrollmentBody }>,
  reply: FastifyReply
) => {
  const statusEnrollmentId = request.params.id;
  const statusEnrollmentData = request.body;
  const statusEnrollment = await updateByIdStatusEnrollmentServices(statusEnrollmentId, statusEnrollmentData);
  reply.send({ message: statusEnrollment });
};

export const deleteByIdStatusEnrollmentController = async (
  request: FastifyRequest<{ Params: StatusEnrollmentParams }>,
  reply: FastifyReply
) => {
  const statusEnrollmentId = request.params.id;
  const statusEnrollment = await deleteByIdStatusEnrollmentServices(statusEnrollmentId);
  reply.send({ message: statusEnrollment });
};
