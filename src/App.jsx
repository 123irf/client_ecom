import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹ {product.price}</p>

          <img
            src={`${import.meta.env.VITE_API_URL}${product.image}`}
            alt={product.name}
            width="200"
          />
        </div>
      ))}
    </div>
  );
}

export default App;