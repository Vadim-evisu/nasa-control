import { ILaunch, ILaunchesList } from "./../types/launch.type.js";

// const launches: ILaunchesList = new Map();

// const launchItem: ILaunch = {
//   flightNumber: 100,
//   mission: "Keppler",
//   rocket: "Dragon",
//   launchDate: new Date("December 26, 2040"),
//   destination: "Kepler-442",
//   customers: ["SpaceX"],
//   upcoming: true,
//   success: false,
// };

class LaunchModel {
  #storage: ILaunchesList;
  #latestFlightNumber: number;
  constructor() {
    this.#storage = new Map();
    this.#latestFlightNumber = this.getLatestFlightNumber();
  }

  get latestFlightNumber() {
    return this.#latestFlightNumber;
  }

  getLatestFlightNumber() {
    const last = this.getStorageList()[this.getStorageList().length - 1];
    if (!last) return 0;
    return last.flightNumber;
  }

  incrementFlightNumber() {
    this.#latestFlightNumber++;
  }

  addItem(item: ILaunch) {
    this.incrementFlightNumber();
    this.#storage.set(
      this.latestFlightNumber,
      Object.assign(item, {
        flightNumber: this.latestFlightNumber,
        customers: ["SpaceX"],
        upcoming: true,
        success: false,
      })
    );
    console.log("CReated");
    return this.getItemByNumber(this.latestFlightNumber);
  }

  getStorageList() {
    return Array.from(this.#storage.values());
  }

  getItemByNumber(flightNumber: number) {
    return this.#storage.get(flightNumber);
  }

  isLaunchExists(launchId: number) {
    return this.#storage.has(launchId);
  }

  abortLaunch(launchId: number) {
    console.log(launchId);
    const target = this.#storage.get(launchId);
    if (target) {
      target.upcoming = false;
      target.success = false;
      console.log("aborted");
    }
    return;
  }
}

async function loadLaunchesData() {
  console.log("Loading Launch Data");
}

export { LaunchModel, loadLaunchesData };
