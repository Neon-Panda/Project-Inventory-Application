import * as db from "../database/queries.js";

export async function getPage(request, response) {
  const all = await db.getAll();
  response.render("home", { all });
}
