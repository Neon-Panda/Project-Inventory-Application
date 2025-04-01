import * as db from "../database/queries.js";

export async function getPage(request, response) {
  const categories = await db.getAllCategories();
  response.render("categories", { categories });
}

export function createCategory(request, response) {
  const { newCategory } = request.body;
  db.addCategory(newCategory);
  response.redirect("/categories");
}

export function deleteCategory(request, response) {
  const { delCategory } = request.body;
  db.deleteCategory(delCategory);
  response.redirect("/categories");
}
