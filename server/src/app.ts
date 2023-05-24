import express from "express";
import cors from "cors";
import { planetsRouter } from "./routes/planets/planets.router.js";
import { launchesRouter } from "./routes/launches/launches.router.js";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();

app.use(cors(corsOptions));
app.use(morgan("combined"));

app.use(express.json());
app.use(planetsRouter);
app.use(launchesRouter);

app.use(express.static(path.join(__dirname, "..", "public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export { app };
