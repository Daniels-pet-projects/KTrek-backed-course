import { FastifyInstance } from 'fastify';
import courseById from '../../repositories/course/course-by-id'

export default async function courseByIdServices(fastify: FastifyInstance, id: string): Promise<any> {
  return await courseById(fastify, id);
}
