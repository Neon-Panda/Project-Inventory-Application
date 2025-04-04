import * as db from "../database/queries.js";

export async function getAllCategories(request, response) {
  try {
    const categories = await db.getAllCategories();
    response.status(200).json({ success: true, data: categories });
  } catch {
    response
      .status(500)
      .json({ success: false, message: "Failed to find categories" });
  }
}

export async function createCategory(request, response) {
  const { addCategory } = request.body;
  try {
    const categoryAdded = await db.addCategory(addCategory);
    response.status(200).json({ success: true, data: categoryAdded });
    return categoryAdded;
  } catch {
    response
      .status(500)
      .json({ success: false, message: "Failed to create category" });
  }
}

export async function deleteCategory(request, response) {
  const delCategoryID = request.params.id;
  try {
    await db.deleteCategory(delCategoryID);
    response.status(200).json({ success: true, message: "Category deleted" });
  } catch {
    response
      .status(500)
      .json({ success: false, message: "Failed to delete category" });
  }
}
