import express from "express";
import path from "node:path";
import routerHome from "./routes/routerHome.js";
import routerCategories from "./routes/routerCategories.js";
import routerItems from "./routes/routerItems.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "static")));

app.use("/", routerHome);
app.use("/categories", routerCategories);
app.use("/items", routerItems);

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

const PORT = 4500;

app.listen(PORT, () => {
  console.log("Porting working at: ", PORT);
});
