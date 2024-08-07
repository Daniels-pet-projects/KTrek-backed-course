import { Courses } from '@prisma/client';
import { prisma } from '../connection/connect-db';

export const createCourseRepository = async (data: Courses): Promise<Courses> => {
  return prisma.courses.create({ data });
};

export const getAllCoursesRepository = async (): Promise<Courses[]> => {
  return prisma.courses.findMany();
};

export const getByIdCourseRepository = async (courseId: Pick<Courses, 'id'>): Promise<Courses> => {
  return prisma.courses.findUnique({
    where: {
      id: courseId.id
    }
  });
};

export const updateByIdCourseRepository = async (
  courseId: Pick<Courses, 'id'>,
  data: Courses
): Promise<Courses> => {
  return prisma.courses.update({
    where: {
      id: courseId.id
    },
    data
  });
};

export const deleteByIdCourseRepository = async (courseId: Pick<Courses, 'id'>): Promise<Courses> => {
  return prisma.courses.delete({
    where: {
      id: courseId.id
    }
  });
};
