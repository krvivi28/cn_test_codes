const request = require("supertest");
const express = require("express");
const setCustomHeader = require(".");
describe("GET / - setCustomHeader", () => {
  let app;

  beforeEach(() => {
    app = express();
    jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("sets the custom header and sends the response", async () => {


    app.get("/", (req, res) => {
      setCustomHeader(res, "Content-Type", "application/json");
      res.json("get method called!");
    });

    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    // expect(response.text).toBe("get method called!");
    // expect(response.headers["content-type"]).toBe("application/json");
    expect(console.log).toHaveBeenCalledWith(
      "Content-Type with value application/json has been set successfully!"
    );
  });

  // Add more test cases if needed
});
