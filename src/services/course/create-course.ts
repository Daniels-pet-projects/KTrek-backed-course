import { FastifyInstance } from 'fastify';
import createCourse from '../../repositories/course/create-course'

export default async function createCourseServices(fastify: FastifyInstance, data: any): Promise<any> {
  return await createCourse(fastify, data);
}
