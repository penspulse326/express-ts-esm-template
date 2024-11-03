import pg from 'pg';
import { Router, Request, Response } from 'express';
import { dbService } from '../config/db.js';
import { asyncHandler } from '../middlewares/asyncHander.js';

interface TimeStampResult {
  now: Date;
}

const router: Router = Router();

// 測試連線
router.get(
  '/test-db',
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const isConnected = await dbService.testConnection();
    if (isConnected === true) {
      res.json({ message: 'Successfully connected to database' });
      return;
    }
    res.status(500).json({ message: 'Failed to connect to database' });
  }),
);

// 簡單的查詢測試
router.get(
  '/query-test',
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const pool = await dbService.getPool();
    const result: pg.QueryResult<TimeStampResult> = await pool.query('SELECT NOW()');

    if (result.rows.length > 0) {
      res.json({
        message: 'Query executed successfully',
        timestamp: result.rows[0].now,
      });
      return;
    }
    throw new Error('No result returned from query');
  }),
);

export default router;
