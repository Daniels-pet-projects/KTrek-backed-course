import { FastifyInstance } from 'fastify';
import getAllCourse from '../../repositories/course/get-all-courses'

export default async function getAllCourseServices(fastify: FastifyInstance) {
  return await getAllCourse(fastify);
}
