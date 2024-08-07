import Fastify from 'fastify';
import 'dotenv/config';
import { join } from 'path';
import AutoLoad from 'fastify-autoload';

const PORT = process.env.PORT_APP;
const HOST = process.env.HOST_APP;

const fastify = Fastify({
  logger: true
});

fastify.register(AutoLoad, {
  dir: join(__dirname, 'plugins')
});

fastify.register(AutoLoad, {
  dir: join(__dirname, 'routes'),
  options: { prefix: '/api' }
});

fastify.setErrorHandler((error, request, reply) => {
  fastify.log.error(error);
  reply.status(500).send({ error: 'Internal Server Error' });
});

fastify.get('/', (req, res) => {
  res.send({ message: 'Welcome to KTrek services courses API' });
});

async function start() {
  try {
    if (require.main === module) {
      await fastify.listen({
        port: Number(PORT),
        host: String(HOST)
      });
    }
  } catch (e) {
    fastify.log.error(e);
    process.exit(1);
  }
}

start();
