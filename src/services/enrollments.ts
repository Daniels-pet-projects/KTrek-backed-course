import {
  createEnrollmentRepository,
  getAllEnrollmentsRepository,
  getByIdEnrollmentRepository,
  updateByIdEnrollmentRepository,
  deleteByIdEnrollmentRepository
} from '../repositories/enrollments';
// import { createClient } from '../connection/connect-redis';

// const redis = createClient();

export const createEnrollmentController = async (request: any, reply: any) => {
  const enrollmentData = request.body;
  const enrollment = await createEnrollmentRepository(enrollmentData);
  reply.status(201).send({ message: enrollment });
};

// export const getAllEnrollmentsController = async (request: any, reply: any) => {
//   let enrollments;

//   const cacheData = await redis.get('all-enrollments');

//   if (cacheData) {
//     enrollments = JSON.parse(cacheData);
//   } else {
//     enrollments = await getAllEnrollmentsRepository();

//     if (!enrollments) {
//       throw new Error('API error');
//     }
//     await redis.set('all-enrollments', JSON.stringify(enrollments), 'EX', 60, 'NX');
//   }

//   reply.status(201).send({ message: enrollments });
// };

export const getByIdEnrollmentController = async (request: any, reply: any) => {
  const enrollmentId = request.params.id;
  const enrollment = await getByIdEnrollmentRepository(enrollmentId);
  reply.status(201).send({ message: enrollment });
};

export const updateByIdEnrollmentController = async (request: any, reply: any) => {
  const enrollmentId = request.params.id;
  const enrollmentData = request.body;
  const enrollment = await updateByIdEnrollmentRepository(enrollmentId, enrollmentData);
  reply.status(201).send({ message: enrollment });
};

export const deleteByIdEnrollmentController = async (request: any, reply: any) => {
  const enrollmentId = request.params.id;
  const enrollment = await deleteByIdEnrollmentRepository(enrollmentId);
  reply.status(201).send({ message: enrollment });
};
