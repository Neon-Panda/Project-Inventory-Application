import { Router } from "express";
import * as items from "../controllers/controlItems.js";

const routerItems = Router();

routerItems.get("/", items.getPage);

export default routerItems;
