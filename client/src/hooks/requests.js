const API_UL = "http://localhost:8000/";

async function httpGetPlanets() {
  const res = await fetch(`${API_UL}planets/`);
  return await res.json();
}

async function httpGetLaunches() {
  const res = await fetch(`${API_UL}launches/`);
  const data = await res.json();
  return data.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
