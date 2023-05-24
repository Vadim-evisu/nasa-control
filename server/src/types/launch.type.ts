interface ILaunch {
  flightNumber: number;
  mission: string;
  rocket: string;
  launchTime: Date;
  destination: string;
  customer: string[];
  upcoming: boolean;
  success: boolean;
}

type ILaunchesList = Map<number, ILaunch>;

export { ILaunch, ILaunchesList };
