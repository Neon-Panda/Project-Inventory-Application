import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function makeCall() {
      const data = await fetch("http://localhost:4500/categories");
      const datajson = await data.json();
      setCategories(datajson.data);
      setLoading(false);
    }
    makeCall();
  }, []);

  return (
    <div>
      <h2>Categories testing</h2>
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
                  <button>Delete</button>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
