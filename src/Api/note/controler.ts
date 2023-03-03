import express, { Response, NextFunction } from "express";
import * as service from "./service";

export const saveNotes = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await service.saveNotes(req);
    res.send({
      status: result.status,
      data: result.result,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

export const getNotes = async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = await service.getNotes(req);
    res.send({
      status: result.status,
      data: result.result,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleNote = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await service.getSingleNote(req);
    res.send({
      status: result.status,
      data: result.result,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};
