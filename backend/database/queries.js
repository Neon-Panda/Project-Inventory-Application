import { pool } from "./pool.js";

export async function getAll() {
  const { rows } = await pool.query(
    "SELECT categories.name AS category_name, items.name AS item_name, price, stock FROM categories LEFT JOIN items ON categories.id = items.category_id"
  );
  return rows;
}

export async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

export async function addCategory(name) {
  const { rows } = await pool.query(
    "INSERT INTO categories (name) VALUES ($1) RETURNING *",
    [name]
  );
  return rows;
}

export async function deleteCategory(categoryID) {
  const { rows } = await pool.query(
    "DELETE FROM categories WHERE categories.id = $1",
    [categoryID]
  );
  return;
}

export async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

export async function addItem(name, price, stock, categoryID) {
  const { rows } = await pool.query(
    "INSERT INTO items (name, price, stock, category_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, parseFloat(price), parseInt(stock), parseInt(categoryID)]
  );
  return rows;
}

// export async function editItem(name, price, stock, categoryID, itemID) {
//   const { rows } = await pool.query(
//     "UPDATE items (name, price, stock, category_id) VALUES ($1, $2, $3, $4) WHERE items.id = itemID RETURNING *",
//     [name, parseFloat(price), parseInt(stock), parseInt(categoryID)]
//   );
// }

export async function deleteItem(itemID) {
  const { rows } = await pool.query("DELETE FROM items WHERE items.id = $1", [
    itemID,
  ]);
  return;
}
