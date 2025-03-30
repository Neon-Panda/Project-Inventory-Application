import { Router } from "express";

const routerItems = Router();

routerItems.get("/", (request, response) => response.render("items"));

export default routerItems;
