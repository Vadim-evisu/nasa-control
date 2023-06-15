interface ILaunch {
  flightNumber: number;
  mission: string;
  rocket: string;
  launchDate: Date;
  destination: string;
  customers: string[];
  upcoming: boolean;
  success: boolean;
}

type ILaunchNewItem = Pick<ILaunch, "mission" | "rocket" | "destination"> & {
  launchDate: string;
};

type ILaunchesList = Map<number, ILaunch>;

export { ILaunch, ILaunchesList, ILaunchNewItem };
