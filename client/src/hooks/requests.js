const API_UL = "http://localhost:8000/v1/";

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
  try {
    return await fetch(`${API_UL}launches/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_UL}launches/${id}/`, {
      method: "DELETE",
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
