import { FastifyInstance } from 'fastify';

export default async function courseById(fastify: FastifyInstance, id: string): Promise<any> {
  const course = await fastify.prisma.courses.deleteMany({ where: { id }});

  return course;
}
