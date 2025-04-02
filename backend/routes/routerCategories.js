import { Router } from "express";
import * as categories from "../controllers/controlCategories.js";

const routerCategories = Router();

routerCategories.get("/", categories.getAllCategories);
routerCategories.post("/", categories.createCategory);
routerCategories.delete("/:id", categories.deleteCategory);

export default routerCategories;
