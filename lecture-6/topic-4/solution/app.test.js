// user.controller.test.js
import request from "supertest";
import app from "./index.js";

describe("User Controller", () => {
  it('should return 201 and "user added !" when valid form data is provided', async () => {
    const response = await request(app)
      .post("/new")
      .send({ name: "John Doe", mobile: "1234567890" });

    expect(response.status).toBe(201);
    expect(response.text).toBe("user added !");
  });

  it("should return 401 and error messages when invalid form data is provided", async () => {
    const response = await request(app)
      .post("/new")
      .send({ name: "John", mobile: "1234" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      name: "enter valid name of length greater than 4",
      mobile: "enter valid mobile number of 10 digits",
    });
  });
});
