import request from "supertest";
import ProductModel from "./src/models/product.model";
import app from "./index.js";
import { products } from "./src/assets/products";
const productModel = new ProductModel();
describe("Testing fetchProducts and getProducts", () => {
  it("fetchProducts should return the array of products", () => {
    expect(productModel.fetchProducts()).toEqual(products);
  });
  it("getProducts should respond with the data retrieved from the fetchProducts method when a user sends a GET request ('/') to port 3000.", async () => {
    const res = await request(app).get("/");
    const responseData = res.body;
    expect(res.status).toBe(200);
    expect(Array.isArray(responseData)).toBe(true);
    expect(responseData).toEqual(expect.any(Array));
    expect(responseData).toEqual(products);
  });
});
