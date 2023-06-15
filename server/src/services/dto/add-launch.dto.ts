import { object, string, ObjectSchema } from "yup";
import { ILaunchNewItem } from "../../types/launch.type.js";

const launchSchema: ObjectSchema<ILaunchNewItem> = object({
  mission: string().required(),
  rocket: string().required(),
  launchDate: string().required(),
  destination: string().required(),
});

// const addLaunchDto = object({
//   body: launchSchema,
// });

export { launchSchema as addLaunchDto };
