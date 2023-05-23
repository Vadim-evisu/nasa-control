import { error } from "console";
import { parse } from "csv-parse";
import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

type IData = Record<string, string>;

const records: IData[] = [];

const loadPlanetsData = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return new Promise<void>((resolve, reject) => {
    const isHabitablePlanet = (planet: IData = {}) => {
      return (
        planet["koi_disposition"] === "CONFIRMED" &&
        +planet["koi_insol"] > 0.36 &&
        +planet["koi_insol"] < 1.11 &&
        +planet["koi_prad"] < 1.6
      );
    };

    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (item) => {
        if (isHabitablePlanet(item)) records.push(item);
      })
      .on("error", (error) => {
        console.error(error);
        reject(error);
      })
      .on("end", () => {
        // console.log(records);
        // console.log(records.map((item) => item["kepler_name"]));
        // console.log(records.length + " " + "habitable planets found!");
        resolve();
      });
  });
};

export { records as planets, loadPlanetsData };
