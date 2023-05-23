import express from "express";
import cors from "cors";
import { planetsRouter } from "./routes/planets/planets.router.js";

const corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use(planetsRouter);

export { app };
