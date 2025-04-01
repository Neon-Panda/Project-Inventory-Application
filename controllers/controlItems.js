import * as db from "../database/queries.js";

export async function getPage(request, response) {
  const items = await db.getAllItems();
  response.render("items", { items });
}

export function createItem(request, response) {
  const { itemName, itemPrice, itemStock, itemCategory } = request.body;
  db.addItem(itemName, itemPrice, itemStock, itemCategory);
  response.redirect("/items");
}

export function deleteItem(request, reponse) {
  const { itemDelete } = request.body;
  db.deleteItem(itemDelete);
  reponse.redirect("/items");
}
