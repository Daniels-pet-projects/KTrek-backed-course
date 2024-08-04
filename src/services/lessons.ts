export const createLessonServices = (lessonData: any): string => {
  return 'createLesson';
};

export const getAllLessonsServices = (): string => {
  return 'getAllLessons';
};

export const getByIdLessonServices = (lessonId: string): string => {
  return 'getByIdLesson';
};

export const updateByIdLessonServices = (
  lessonId: string,
  lessonData: any
): string => {
  return 'updateByIdLesson';
};

export const deleteByIdLessonServices = (lessonId: string): string => {
  return 'deleteByIdLesson';
};
