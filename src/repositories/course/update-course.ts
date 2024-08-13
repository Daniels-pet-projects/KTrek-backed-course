import { FastifyInstance } from 'fastify';

export default async function courseById(fastify: FastifyInstance, id: string, data: any): Promise<any> {
  const updatedCourse = await fastify.prisma.courses.update({
    where: { id },
    data
  });

  return updatedCourse;
}
