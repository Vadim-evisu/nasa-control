import express from "express";
import {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httAddLaunchMiddlewares,
  httpAborderLaunch,
} from "./launches.controller.js";

const launchesRouter = express.Router();

const LAUNCH_PATH = "/launches/";

launchesRouter.get(LAUNCH_PATH, httpGetAllLaunches);

launchesRouter.post(LAUNCH_PATH, [
  ...httAddLaunchMiddlewares,
  httpAddNewLaunch,
]);

launchesRouter.delete(`${LAUNCH_PATH}:id`, httpAborderLaunch);

export { launchesRouter };
