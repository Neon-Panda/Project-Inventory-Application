import { pool } from "./pool.js";

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  console.log(rows);
  return rows;
}

getAllCategories();
