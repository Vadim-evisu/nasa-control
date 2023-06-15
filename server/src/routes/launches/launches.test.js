import request from "supertest";
import { app } from "./../../app.js";
import { describe } from "node:test";

describe("Test Get /launcjes", () => {
  test("Response with 200 status", async () => {
    const response = await request(app)
      .get("/launches/")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launcjes", () => {
  const mockedLaunch = {
    mission: "Keppler",
    rocket: "Dragon",
    launchDate: "June 23, 2030",
    destination: "Kepler-442",
  };

  test("It should respond with 200", async () => {
    const response = await request(app)
      .post("/launches/")
      .send(mockedLaunch)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(mockedLaunch.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(responseDate).toBe(requestDate);
    const { launchDate, ...launchWithoutDate } = mockedLaunch;
    expect(response.body).toMatchObject(launchWithoutDate);
  });

  test("It should catch missing required proprties", async () => {
    const { launchDate, ...launchWithoutDate } = mockedLaunch;
    const response = await request(app)
      .post("/launches/")
      .send(launchWithoutDate)
      .expect("Content-Type", /json/)
      .expect(422);
  });
});
