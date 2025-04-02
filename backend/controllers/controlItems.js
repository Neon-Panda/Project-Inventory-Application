import * as db from "../database/queries.js";

export async function getAllItems(request, response) {
  try {
    const items = await db.getAllItems();
    response.status(200).json({ success: true, data: items });
  } catch {
    response
      .status(500)
      .json({ success: false, message: "Failed to find item" });
  }
}

export async function createItem(request, response) {
  const { itemName, itemPrice, itemStock, itemCategory } = request.body;
  try {
    const itemAdded = await db.addItem(
      itemName,
      itemPrice,
      itemStock,
      itemCategory
    );
    response.status(201).json({ success: true, data: itemAdded });
  } catch {
    response
      .status(500)
      .json({ success: false, message: "Failed to create item" });
  }
}

export async function deleteItem(request, response) {
  const itemID = request.params.id;

  try {
    await db.deleteItem(itemID);
    response.status(200).json({ success: true, message: "Item deleted" });
  } catch {
    response
      .status(500)
      .json({ success: false, message: "Failed to delete item" });
  }
}
