import { Router } from "express";
import * as items from "../controllers/controlItems.js";

const routerItems = Router();

routerItems.get("/", items.getAllItems);
routerItems.post("/", items.createItem);
routerItems.delete("/:id", items.deleteItem);

export default routerItems;
