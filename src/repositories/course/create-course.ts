import { FastifyInstance } from 'fastify';

export default async function createCourse(fastify: FastifyInstance, data: any): Promise<any> {
  return fastify.prisma.courses.create({ data });
}
