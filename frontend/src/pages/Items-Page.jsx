import { useEffect, useState } from "react";

export default function ItemsPage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemStock, setItemStock] = useState(0);
  const [itemCategory, setItemCategory] = useState(0);

  useEffect(() => {
    async function makeCall() {
      const data = await fetch("http://localhost:4500/items");
      const dataJSON = await data.json();
      setItems(dataJSON.data);
      setLoading(false);
    }
    makeCall();
  }, []);

  async function handleAddItem() {
    const itemAdded = await fetch("http://localhost:4500/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemName, itemPrice, itemStock, itemCategory }),
    });
  }

  async function handleDelete(itemID) {
    await fetch(`http://localhost:4500/items/${itemID}`, {
      method: "DELETE",
    });
    setItems([...items.filter((item) => item.id !== itemID)]);
  }

  return (
    <div>
      <h2>Items Catalog</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          onChange={(event) => setItemName(event.target.value)}
          type="text"
          required
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          required
          onChange={(event) => setItemPrice(event.target.value)}
        />
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          name="stock"
          id="stock"
          required
          onChange={(event) => setItemStock(event.target.value)}
        />
        <label htmlFor="category">CategoryID</label>
        <input
          type="number"
          name="category"
          id="category"
          required
          onChange={(event) => setItemCategory(event.target.value)}
        />
      </div>
      <button onClick={handleAddItem}>Add new item</button>
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          items.map((item) => {
            return (
              <li key={item.id}>
                <p>Name: {item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Stock: {item.stock}</p>
                <p>Category ID: {item.category_id}</p>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
