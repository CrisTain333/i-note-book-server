import express, { Response, NextFunction } from "express";
import * as service from "./service";

// Get user
export const user = async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = await service.user(req);
    console.log();
    res.send({
      status: result.status,
      data: result.result,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};
