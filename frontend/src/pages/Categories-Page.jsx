import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [addCategory, setAddCategory] = useState("");

  useEffect(() => {
    async function makeCall() {
      const data = await fetch("http://localhost:4500/categories");
      const datajson = await data.json();
      setCategories(datajson.data);
      setLoading(false);
    }
    makeCall();
  }, []);

  async function handleAddCategory() {
    const categoryAdded = await fetch("http://localhost:4500/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ addCategory: addCategory }),
    });
    const categoryAddedJSON = (await categoryAdded.json()).data[0];
    setCategories([...categories, categoryAddedJSON]);
  }

  async function handleDelete(itemID) {
    await fetch(`http://localhost:4500/categories/${itemID}`, {
      method: "DELETE",
    });
    setCategories([...categories.filter((item) => item.id !== itemID)]);
  }

  return (
    <div>
      <h2>Categories testing</h2>
      <input
        onChange={(event) => setAddCategory(event.target.value)}
        type="text"
      />
      <button onClick={handleAddCategory}>Add category</button>
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          categories.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.name}</p>
                <div>
                  <button>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
