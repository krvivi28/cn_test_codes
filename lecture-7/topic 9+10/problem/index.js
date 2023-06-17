// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import cookieParser from "cookie-parser";
import { handleGet, handlePost } from "./user.controller.js";

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", handleGet);
app.post("/guess", handlePost);

export default app;
