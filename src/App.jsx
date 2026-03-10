import { useState } from "react";
import ProductList from "./components/ProductList";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 }
];

function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

 return (
  <div className="container">
    <h1 className="title">Product Search & Filter</h1>

    <div className="controls">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Home</option>
      </select>
    </div>

    <ProductList products={filteredProducts}/>
  </div>
);}

export default App;