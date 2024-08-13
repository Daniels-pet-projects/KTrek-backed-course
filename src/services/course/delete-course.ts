import { FastifyInstance } from 'fastify';
import deleteCourse from '../../repositories/course/delete-course'

export default async function deleteCourseServices(fastify: FastifyInstance, id: string): Promise<any> {
  return await deleteCourse(fastify, id);
}
