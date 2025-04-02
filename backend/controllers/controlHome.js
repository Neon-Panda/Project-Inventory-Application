import * as db from "../database/queries.js";

export async function getPage(request, response) {
  try {
    const all = await db.getAll();
    response.status(200).json({ success: true, data: all });
  } catch {
    response.status(500).json({ success: false, message: "Failed to get all" });
  }
}
