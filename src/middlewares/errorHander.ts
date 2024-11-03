import { Request, Response } from 'express';

export interface AppError extends Error {
  statusCode?: number;
  status?: string;
}

export function errorHandler(err: AppError, req: Request, res: Response): void {
  const statusCode = err.statusCode ?? 500;

  res.status(statusCode).json({
    status: err.status ?? 'error',
    message: err.message,
    // 只在開發環境顯示錯誤堆疊
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}
