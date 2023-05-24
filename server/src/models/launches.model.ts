import { ILaunch, ILaunchesList } from "./../types/launch.type.js";

const launches: ILaunchesList = new Map();

const launchItem: ILaunch = {
  flightNumber: 100,
  mission: "Keppler",
  rocket: "Dragon",
  launchTime: new Date("December 26, 2040"),
  destination: "Kep1",
  customer: ["SpaceX"],
  upcoming: true,
  success: false,
};

// launches.set(launchItem.flightNumber, launchItem);

class LaunchModel {
  #storage: ILaunchesList;
  constructor() {
    this.#storage = new Map();
    this.addItem(launchItem.flightNumber, launchItem);
  }
  addItem(key: number, item: ILaunch) {
    this.#storage.set(key, item);
  }

  getStorageList() {
    return Array.from(this.#storage.values());
  }
}

export { LaunchModel };
