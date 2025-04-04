import express from "express";
import routerHome from "./routes/routerHome.js";
import routerCategories from "./routes/routerCategories.js";
import routerItems from "./routes/routerItems.js";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", routerHome);
app.use("/categories", routerCategories);
app.use("/items", routerItems);

const PORT = 4500;

app.listen(PORT, () => {
  console.log("Porting working at: ", PORT);
});
