import { Router } from "express";

const routerHome = Router();

routerHome.get("/", (request, response) => response.render("home"));

export default routerHome;
