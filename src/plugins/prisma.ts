import fp from 'fastify-plugin';
import { PrismaClient } from '@prisma/client';
import { databaseConfigPostgresql } from '../configs/database/database-config-postgresql';

const initDatabaseConnection = async (): Promise<PrismaClient> => {
  const db = new PrismaClient({
    datasources: {
      db: {
        url: databaseConfigPostgresql.databaseURL
      }
    },
    errorFormat: 'pretty',
    log: ['query', 'info', 'warn', 'error']
  });
  await db.$connect();
  return db;
};

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export default fp(async fastify => {
  const prisma = await initDatabaseConnection();

  fastify.decorate('prisma', prisma);

  fastify.addHook('onClose', async () => {
    await fastify.prisma.$disconnect();
  });
});
