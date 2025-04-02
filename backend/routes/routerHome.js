import { Router } from "express";
import * as home from "../controllers/controlHome.js";

const routerHome = Router();

routerHome.get("/", home.getPage);

export default routerHome;
