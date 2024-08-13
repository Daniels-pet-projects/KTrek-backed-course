import { FastifyInstance } from 'fastify';
import updateCourse from '../../repositories/course/update-course';

export default async function updateCourseServices(
  fastify: FastifyInstance,
  id: string,
  data: any
): Promise<any> {
  return await updateCourse(fastify, id, data);
}
