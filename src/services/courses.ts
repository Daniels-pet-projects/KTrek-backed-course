import { PrismaClient, Courses } from '@prisma/client';

const prisma = new PrismaClient();

export const createCourseServices = async (data: Courses): Promise<Courses> => {
  const course = await prisma.courses.create({ data });
  return course;
};

export const getAllCoursesServices = async (): Promise<Courses[]> => {
  const course = await prisma.courses.findMany();
  return course;
};

export const getByIdCourseServices = async (courseId: Pick<Courses, 'id'>): Promise<Courses> =>
  await prisma.courses.findUnique({
    where: {
      id: courseId.id
    }
  });

export const updateByIdCourseServices = async (
  courseId: Pick<Courses, 'id'>,
  courseData: any
): Promise<Courses> => {
  const course = await prisma.courses.update({
    where: {
      id: courseId.id
    },
    data: courseData
  });
  return course;
};

export const deleteByIdCourseServices = async (courseId: Pick<Courses, 'id'>): Promise<Courses> => {
  const course = await prisma.courses.delete({
    where: {
      id: courseId.id
    }
  });
  return course;
};
