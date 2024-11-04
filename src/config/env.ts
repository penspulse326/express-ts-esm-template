import dotenv from 'dotenv';
import { z } from 'zod';

// 載入環境變數
dotenv.config();

// 定義環境變數的驗證 schema
const envSchema = z.object({
  // Server
  PORT: z.string().default('3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // API
  API_PREFIX: z.string().default('/api'),

  // CORS
  CORS_ORIGIN: z.string().default('http://localhost:3000'),

  // Database
  POSTGRES_HOST: z.string().default('db'), // 改為 'db'，這樣在 Docker 中會更方便
  POSTGRES_PORT: z.string().default('5432'),
  POSTGRES_DB: z.string().default('myapp_db'),
  POSTGRES_USER: z.string().default('admin'),
  POSTGRES_PASSWORD: z.string().default('admin123'),
  POSTGRES_SSL: z.string().default('false'),

  // Pool
  DB_POOL_MIN: z.string().default('0'),
  DB_POOL_MAX: z.string().default('10'),
  DB_POOL_IDLE_TIMEOUT: z.string().default('10000'),
});

// 驗證環境變數
const env = envSchema.parse(process.env);

// 匯出配置
export const config = {
  server: {
    port: parseInt(env.PORT, 10),
    nodeEnv: env.NODE_ENV,
  },
  api: {
    prefix: env.API_PREFIX,
  },
  cors: {
    origin: env.CORS_ORIGIN,
  },
  db: {
    host: env.POSTGRES_HOST,
    port: parseInt(env.POSTGRES_PORT, 10),
    database: env.POSTGRES_DB,
    user: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    ssl: env.POSTGRES_SSL === 'true',
    pool: {
      min: parseInt(env.DB_POOL_MIN, 10),
      max: parseInt(env.DB_POOL_MAX, 10),
      idleTimeout: parseInt(env.DB_POOL_IDLE_TIMEOUT, 10),
    },
  },
} as const;
