import Fastify from 'fastify';
import 'dotenv/config';
import { courseRoutes } from './routes/courses';
import { enrollmentRoutes } from './routes/enrollments';
import { lessonRoutes } from './routes/lessons';
import { statusEnrollmentRoutes } from './routes/status-enrollments';

const PORT = process.env.PORT_APP;
const HOST = process.env.HOST_APP;

const fastify = Fastify({
  logger: true
});

// Routes
fastify.get('/', async (req, reply) => {
  reply.send('Hello, World! js!');
});

fastify
  .register(courseRoutes)
  .register(enrollmentRoutes)
  .register(lessonRoutes)
  .register(statusEnrollmentRoutes);

// Run the server!
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
