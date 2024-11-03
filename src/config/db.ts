import pg from 'pg';

const { Pool } = pg;

// 資料庫連線配置
const databaseConfig = {
  user: 'admin',
  password: 'admin123',
  host: 'localhost',
  port: 5432,
  database: 'myapp_db',
};

class DatabaseService {
  private static instance: DatabaseService | null = null;
  private readonly pool: typeof Pool.prototype;

  private constructor() {
    this.pool = new Pool(databaseConfig);
  }

  public static getInstance(): DatabaseService {
    if (DatabaseService.instance === null) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  public async getPool(): Promise<typeof Pool.prototype> {
    return this.pool;
  }

  public async testConnection(): Promise<boolean> {
    let client: pg.PoolClient | null = null;

    try {
      client = await this.pool.connect();
      console.log('Successfully connected to PostgreSQL');
      return true;
    } catch (error) {
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
