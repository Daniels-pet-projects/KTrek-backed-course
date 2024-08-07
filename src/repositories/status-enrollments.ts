import { StatusEnrollments } from '@prisma/client';
import { prisma } from '../connection/connect-db';

export const createStatusEnrollmentRepository = async (data: StatusEnrollments): Promise<StatusEnrollments> => {
  return prisma.statusEnrollments.create({ data });
};

export const getAllStatusEnrollmentsRepository = async (): Promise<StatusEnrollments[]> => {
  return prisma.statusEnrollments.findMany();
};

export const getByIdStatusEnrollmentRepository = async (
  statusEnrollmentId: Pick<StatusEnrollments, 'id'>
): Promise<StatusEnrollments> => {
  return prisma.statusEnrollments.findUnique({
    where: {
      id: statusEnrollmentId.id
    }
  });
};

export const updateByIdStatusEnrollmentRepository = async (
  statusEnrollmentId: Pick<StatusEnrollments, 'id'>,
  data: StatusEnrollments
): Promise<StatusEnrollments> => {
  return prisma.statusEnrollments.update({
    where: {
      id: statusEnrollmentId.id
    },
    data
  });
};

export const deleteByIdStatusEnrollmentRepository = async (
  statusEnrollmentId: Pick<StatusEnrollments, 'id'>
): Promise<StatusEnrollments> => {
  return prisma.statusEnrollments.delete({
    where: {
      id: statusEnrollmentId.id
    }
  });
};
