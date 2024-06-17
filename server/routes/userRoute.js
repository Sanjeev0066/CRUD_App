import express from "express";
import { create, getAll } from "../controller/userController.js";

const route = new express.Router();

route.post("/create", create);
route.get("/getAll", getAll);

export default route;
