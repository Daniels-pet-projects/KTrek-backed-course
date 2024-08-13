import { FastifyInstance } from 'fastify';

export default async function getAllCourse(fastify: FastifyInstance): Promise<any> {
  const courses = await fastify.prisma.courses.findMany();

  return courses;
}
