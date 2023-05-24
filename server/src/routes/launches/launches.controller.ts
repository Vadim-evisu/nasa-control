import { Request, Response } from "express";
import { LaunchModel } from "./../../models/launches.model.js";

const LaunchRepo = new LaunchModel();

const getAllLaunches = (req: Request, res: Response) => {
  return res.status(200).json(LaunchRepo.getStorageList());
};

export { getAllLaunches };
