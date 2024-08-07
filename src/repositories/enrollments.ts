import { Enrollments } from '@prisma/client';
import { prisma } from '../connection/connect-db';

export const createEnrollmentRepository = async (data: Enrollments): Promise<Enrollments> => {
  return prisma.enrollments.create({ data });
};

export const getAllEnrollmentsRepository = async (): Promise<Enrollments[]> => {
  return prisma.enrollments.findMany();
};

export const getByIdEnrollmentRepository = async (
  enrollmentId: Pick<Enrollments, 'id'>
): Promise<Enrollments> => {
  return prisma.enrollments.findUnique({
    where: {
      id: enrollmentId.id
    }
  });
};

export const updateByIdEnrollmentRepository = async (
  enrollmentId: Pick<Enrollments, 'id'>,
  data: Enrollments
): Promise<Enrollments> => {
  return prisma.enrollments.update({
    where: {
      id: enrollmentId.id
    },
    data
  });
};

export const deleteByIdEnrollmentRepository = async (
  enrollmentId: Pick<Enrollments, 'id'>
): Promise<Enrollments> => {
  return prisma.enrollments.delete({
    where: {
      id: enrollmentId.id
    }
  });
};
