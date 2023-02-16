import express, { Response, NextFunction } from "express";
import * as service from "./service";
/// --------------- Handle register
export const registerUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await service.register(req.body);
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

/// --------------- Handle Login
export const login = async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = await service.login(req.body);
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

// Get user
export const getUser = async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = await service.getUser(req);
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
