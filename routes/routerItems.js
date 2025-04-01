import { Router } from "express";
import * as items from "../controllers/controlItems.js";

const routerItems = Router();

routerItems.get("/", items.getPage);
routerItems.post("/add", items.createItem);
routerItems.post("/delete", items.deleteItem);

export default routerItems;
