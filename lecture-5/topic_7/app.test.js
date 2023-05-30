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
    expect(res.status).toBe(200);
    expect(res.header["content-type"]).toContain("text/html");
    expect(res.text).toContain(
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem"
    );
  });
});
