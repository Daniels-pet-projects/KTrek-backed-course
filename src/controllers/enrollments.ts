import { FastifyRequest, FastifyReply } from 'fastify';
import {
  createEnrollmentServices,
  getAllEnrollmentsServices,
  getByIdEnrollmentServices,
  updateByIdEnrollmentServices,
  deleteByIdEnrollmentServices
} from '../services/enrollments';

// Типы для параметров и тела запроса
type EnrollmentParams = { id: string };
type EnrollmentBody = {
  /* определите структуру тела запроса для создания/обновления записи */
};

export const createEnrollmentController = async (
  request: FastifyRequest<{ Body: EnrollmentBody }>,
  reply: FastifyReply
) => {
  const enrollmentData = request.body;
  const enrollment = await createEnrollmentServices(enrollmentData);
  reply.send({ message: enrollment });
};

export const getAllEnrollmentsController = async (request: FastifyRequest, reply: FastifyReply) => {
  const enrollments = await getAllEnrollmentsServices();
  reply.send({ message: enrollments });
};

export const getByIdEnrollmentController = async (
  request: FastifyRequest<{ Params: EnrollmentParams }>,
  reply: FastifyReply
) => {
  const enrollmentId = request.params.id;
  const enrollment = await getByIdEnrollmentServices(enrollmentId);
  reply.send({ message: enrollment });
};

export const updateByIdEnrollmentController = async (
  request: FastifyRequest<{ Params: EnrollmentParams; Body: EnrollmentBody }>,
  reply: FastifyReply
) => {
  const enrollmentId = request.params.id;
  const enrollmentData = request.body;
  const enrollment = await updateByIdEnrollmentServices(enrollmentId, enrollmentData);
  reply.send({ message: enrollment });
};

export const deleteByIdEnrollmentController = async (
  request: FastifyRequest<{ Params: EnrollmentParams }>,
  reply: FastifyReply
) => {
  const enrollmentId = request.params.id;
  const enrollment = await deleteByIdEnrollmentServices(enrollmentId);
  reply.send({ message: enrollment });
};
