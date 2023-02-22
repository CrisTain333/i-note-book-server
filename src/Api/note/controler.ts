import express, { Response, NextFunction } from "express";
import * as service from "./service";

export const saveNotes = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await service.saveNotes(req);
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
