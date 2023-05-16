const { server, startServer } = require(".");
const request=require("supertest");

describe("Express Server", () => {
  it("responds with 'Be a Coding Ninja.' when a GET request is made to '/'", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Be a Coding Ninja.");
  });
});

describe("startServer", () => {
  it("prints the correct message to the console", () => {
    const mockConsoleLog = jest.spyOn(console, "log");
    const port = 3100;
    startServer(port);
    expect(mockConsoleLog).toHaveBeenCalledWith(`server is listening at port: ${port}`);
    mockConsoleLog.mockRestore();
  });
});

