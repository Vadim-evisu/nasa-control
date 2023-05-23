import { Request, Response } from "express";
import { planets, loadPlanetsData } from "./../../models/planets.model.js";

const httpGetAllPlanets = async (req: Request, res: Response) => {
  await loadPlanetsData();
  return res.status(200).json(planets);
};

export { httpGetAllPlanets };
