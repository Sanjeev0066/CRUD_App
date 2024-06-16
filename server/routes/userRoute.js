import express from "express";
import { create } from "../controller/userController.js";

const route = new express.Router();

route.post("/create", create);

export default route;
