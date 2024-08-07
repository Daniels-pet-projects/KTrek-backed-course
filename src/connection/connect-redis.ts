import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

export const createClient = () => {
  const client = new Redis({
    host: String(process.env.REDIS_HOST),
    port: Number(process.env.REDIS_PORT),
    maxRetriesPerRequest: null // отключить ограничение на количество попыток
  });

  client.on('error', err => {
    console.error('Что-то пошло не так', err);
  });

  return client;
};
