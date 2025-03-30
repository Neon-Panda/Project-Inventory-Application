import { Router } from "express";

const routerCategories = Router();

routerCategories.get("/", (request, response) => response.render("categories"));

export default routerCategories;
