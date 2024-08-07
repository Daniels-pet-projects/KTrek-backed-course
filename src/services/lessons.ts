import {
  createLessonRepository,
  getAllLessonsRepository,
  getByIdLessonRepository,
  updateByIdLessonRepository,
  deleteByIdLessonRepository
} from '../repositories/lessons';
// import { createClient } from '../connection/connect-redis';

// const redis = createClient();

export const createLessonController = async (request: any, reply: any) => {
  const lessonData = request.body;
  const lesson = await createLessonRepository(lessonData);
  reply.status(201).send({ message: lesson });
};

// export const getAllLessonsController = async (request: any, reply: any) => {
//   let lessons;

//   const cacheData = await redis.get('all-lessons');

//   if (cacheData) {
//     lessons = JSON.parse(cacheData);
//   } else {
//     lessons = await getAllLessonsRepository();

//     if (!lessons) {
//       throw new Error('API error');
//     }
//     await redis.set('all-lessons', JSON.stringify(lessons), 'EX', 60, 'NX');
//   }

//   reply.status(201).send({ message: lessons });
// };

export const getByIdLessonController = async (request: any, reply: any) => {
  const lessonId = request.params.id;
  const lesson = await getByIdLessonRepository(lessonId);
  reply.status(201).send({ message: lesson });
};

export const updateByIdLessonController = async (request: any, reply: any) => {
  const lessonId = request.params.id;
  const lessonData = request.body;
  const lesson = await updateByIdLessonRepository(lessonId, lessonData);
  reply.status(201).send({ message: lesson });
};

export const deleteByIdLessonController = async (request: any, reply: any) => {
  const lessonId = request.params.id;
  const lesson = await deleteByIdLessonRepository(lessonId);
  reply.status(201).send({ message: lesson });
};
