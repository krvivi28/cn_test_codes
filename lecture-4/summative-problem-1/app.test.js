const request = require("supertest");
const express = require("express");
const path = require("path");

describe("GET / - default route", () => {
  let app;

  beforeEach(() => {
    app = express();
    jest.spyOn(console, "log").mockImplementation();
    const staticPath = path.join(__dirname, "public");
    app.use(express.static(staticPath));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns 'get method called!'", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("get method called!");
  });
});
