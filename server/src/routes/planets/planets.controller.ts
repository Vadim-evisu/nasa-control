import { Request, Response } from "express";
import {
  loadPlanetsData,
  getAllPlanets,
} from "./../../models/planets.model.js";

const httpGetAllPlanets = async (req: Request, res: Response) => {
  await loadPlanetsData();
  return res.status(200).json(getAllPlanets());
};

export { httpGetAllPlanets };
