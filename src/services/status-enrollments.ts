import {
  createStatusEnrollmentRepository,
  getAllStatusEnrollmentsRepository,
  getByIdStatusEnrollmentRepository,
  updateByIdStatusEnrollmentRepository,
  deleteByIdStatusEnrollmentRepository
} from '../repositories/status-enrollments';
// import { createClient } from '../connection/connect-redis';

// const redis = createClient();

export const createStatusEnrollmentController = async (request: any, reply: any) => {
  const statusEnrollmentData = request.body;
  const statusEnrollment = await createStatusEnrollmentRepository(statusEnrollmentData);
  reply.status(201).send({ message: statusEnrollment });
};

// export const getAllStatusEnrollmentsController = async (request: any, reply: any) => {
//   let statusEnrollments;

//   const cacheData = await redis.get('all-status-enrollments');

//   if (cacheData) {
//     statusEnrollments = JSON.parse(cacheData);
//   } else {
//     statusEnrollments = await getAllStatusEnrollmentsRepository();

//     if (!statusEnrollments) {
//       throw new Error('API error');
//     }
//     await redis.set('all-statusEnrollments', JSON.stringify(statusEnrollments), 'EX', 60, 'NX');
//   }

//   reply.status(201).send({ message: statusEnrollments });
// };

export const getByIdStatusEnrollmentController = async (request: any, reply: any) => {
  const statusEnrollmentId = request.params.id;
  const statusEnrollment = await getByIdStatusEnrollmentRepository(statusEnrollmentId);
  reply.status(201).send({ message: statusEnrollment });
};

export const updateByIdStatusEnrollmentController = async (request: any, reply: any) => {
  const statusEnrollmentId = request.params.id;
  const statusEnrollmentData = request.body;
  const statusEnrollment = await updateByIdStatusEnrollmentRepository(
    statusEnrollmentId,
    statusEnrollmentData
  );
  reply.status(201).send({ message: statusEnrollment });
};

export const deleteByIdStatusEnrollmentController = async (request: any, reply: any) => {
  const statusEnrollmentId = request.params.id;
  const statusEnrollment = await deleteByIdStatusEnrollmentRepository(statusEnrollmentId);
  reply.status(201).send({ message: statusEnrollment });
};
