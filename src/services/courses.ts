import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Course = {
  author_id: string;
  title: string;
  description?: string;
  created_at: string;
  updated_at: string;
};

export const createCourseServices = async (courseData: any): Promise<Course> => {
  const course = await prisma.courses.create({ date: courseData });
  return course;
};

export const getAllCoursesServices = async (): Promise<Course> => {
  const course = await prisma.courses.findMany();
  return course;
};

export const getByIdCourseServices = async (courseId: string): Promise<Course> => {
  const course = await prisma.courses.findUnique({
    where: {
      id: courseId
    }
  });
  return course;
};

export const updateByIdCourseServices = async (courseId: string, courseData: any): Promise<Course> => {
  const course = await prisma.courses.update({
    where: {
      id: courseId
    },
    data: courseData
  });
  return course;
};

export const deleteByIdCourseServices = async (courseId: string): Promise<Course> => {
  const course = await prisma.courses.delete;({
    where: {
      id: courseId
    }
  })
  return course;
};
