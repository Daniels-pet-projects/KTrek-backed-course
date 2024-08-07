import {
  createCourseRepository,
  getAllCoursesRepository,
  getByIdCourseRepository,
  updateByIdCourseRepository,
  deleteByIdCourseRepository
} from '../repositories/courses';
// import { createClient } from '../connection/connect-redis';

// const redis = createClient();

export const createCourseController = async (request: any, reply: any) => {
  const courseData = request.body;
  const course = await createCourseRepository(courseData);
  reply.status(201).send({ message: course });
};

// export const getAllCoursesController = async (request: any, reply: any) => {
//   let courses;
  
//   const cacheData = await redis.get('all-courses');

//   if (cacheData) {
//     courses = JSON.parse(cacheData);
//   } else {
//     courses = await getAllCoursesRepository();

//     if (!courses) {
//       throw new Error('API error');
//     }
//     await redis.set('all-courses', JSON.stringify(courses), 'EX', 60, 'NX');
//   }

//   reply.status(201).send({ message: courses });
// };

export const getByIdCourseController = async (request: any, reply: any) => {
  const courseId = request.params.id;
  const course = await getByIdCourseRepository(courseId);
  reply.status(201).send({ message: course });
};

export const updateByIdCourseController = async (request: any, reply: any) => {
  const courseId = request.params.id;
  const courseData = request.body;
  const course = await updateByIdCourseRepository(courseId, courseData);
  reply.status(201).send({ message: course });
};

export const deleteByIdCourseController = async (request: any, reply: any) => {
  const courseId = request.params.id;
  const course = await deleteByIdCourseRepository(courseId);
  reply.status(201).send({ message: course });
};
