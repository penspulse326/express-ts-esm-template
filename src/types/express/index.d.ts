import express from "express";

declare global {
  namespace Express {
    interface Request {
      // 在這裡加入自定義的 Request 屬性
    }
    interface Response {
      // 在這裡加入自定義的 Response 屬性
    }
  }
}
