import { Request, Response } from "express";
import { LaunchModel } from "./../../models/launches.model.js";
import { ILaunch } from "../../types/launch.type.js";
import { executeValidateMiddleWare } from "../../common/validate.middleware.js";
import { addLaunchDto } from "../../services/dto/add-launch.dto.js";

const LaunchRepo = new LaunchModel();

const httpGetAllLaunches = (req: Request, res: Response) => {
  return res.status(200).json(LaunchRepo.getStorageList());
};

const httAddLaunchMiddlewares = [executeValidateMiddleWare(addLaunchDto)];

const httpAddNewLaunch = (
  { body }: Request<{}, {}, ILaunch>,
  res: Response
) => {
  const item = body;
  if (!item)
    return res.status(404).json({
      error: "Missing data",
    });
  item.launchDate = new Date(item.launchDate);
  return res.status(201).json(LaunchRepo.addItem(item));
};

const httpAborderLaunch = (req: Request, res: Response) => {
  const launchId = Number(req.params.id);
  console.log(launchId);

  if (LaunchRepo.isLaunchExists(launchId)) {
    LaunchRepo.abortLaunch(launchId);
    return res.status(200).end();
  }

  return res.status(404).json({
    error: "Launch not found",
  });
};

export {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httAddLaunchMiddlewares,
  httpAborderLaunch,
};
