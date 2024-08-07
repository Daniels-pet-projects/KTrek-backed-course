import { Lessons } from '@prisma/client';
import { prisma } from '../connection/connect-db';

export const createLessonRepository = async (data: Lessons): Promise<Lessons> => {
  return prisma.lessons.create({ data });
};

export const getAllLessonsRepository = async (): Promise<Lessons[]> => {
  return prisma.lessons.findMany();
};

export const getByIdLessonRepository = async (lessonId: Pick<Lessons, 'id'>): Promise<Lessons> => {
  return prisma.lessons.findUnique({
    where: {
      id: lessonId.id
    }
  });
};

export const updateByIdLessonRepository = async (
  lessonId: Pick<Lessons, 'id'>,
  data: Lessons
): Promise<Lessons> => {
  return prisma.lessons.update({
    where: {
      id: lessonId.id
    },
    data
  });
};

export const deleteByIdLessonRepository = async (lessonId: Pick<Lessons, 'id'>): Promise<Lessons> => {
  return prisma.lessons.delete({
    where: {
      id: lessonId.id
    }
  });
};
