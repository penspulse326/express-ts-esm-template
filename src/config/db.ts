import pg from 'pg';
import { config } from './env.js';

const { Pool } = pg;
type PoolClient = pg.PoolClient;

// 從環境變數取得資料庫配置
const databaseConfig = {
  user: config.db.user,
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  ssl: config.db.ssl,
  min: config.db.pool.min,
  max: config.db.pool.max,
  idleTimeoutMillis: config.db.pool.idleTimeout,
};

class DatabaseService {
  private static instance: DatabaseService | null = null;
  private readonly pool: pg.Pool;

  private constructor() {
    this.pool = new Pool(databaseConfig);
  }

  public static getInstance(): DatabaseService {
    if (DatabaseService.instance === null) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  public async getPool(): Promise<pg.Pool> {
    return this.pool;
  }

  public async testConnection(): Promise<boolean> {
    let client: PoolClient | null = null;

    try {
      client = await this.pool.connect();

      // eslint-disable-next-line no-console
      console.log('Successfully connected to PostgreSQL');
      return true;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error connecting to PostgreSQL:', error);
      return false;
    } finally {
      if (client !== null) {
        await client.release();
      }
    }
  }
}

export const dbService = DatabaseService.getInstance();
