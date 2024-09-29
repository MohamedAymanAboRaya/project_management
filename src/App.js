import React, { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import "./App.css";

const initialProducts = [
  { code: "samsung gh", count: 20, category: "mobile", price: 15000 },
  {
    code: "samsung is",
    count: 21,
    category: "mobile",
    price: 1200,
    sale: true,
  },
  { code: "samsung nbn", count: 22, category: "mobile", price: 15000 },
  { code: "iphone 1", count: 23, category: "mobile", price: 2000, sale: true },
  { code: "novo", count: 24, category: "mobile", price: 3000, sale: true },
  { code: "lonovo", count: 25, category: "mobile", price: 5500 },
  { code: "samsung", count: 25, category: "mobile", price: 500, sale: true },
  { code: "iphone", count: 25, category: "mobile", price: 6000 },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  // Delete product function
  const handleDelete = (code) => {
    setProducts(products.filter((product) => product.code !== code));
  };

  // Update product function (increase price by 10%)
  const handleUpdate = (code) => {
    setProducts(
      products.map((product) =>
        product.code === code
          ? { ...product, price: product.price * 1.1 }
          : product
      )
    );
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onDelete={() => handleDelete(product.code)}
          onUpdate={() => handleUpdate(product.code)}
        />
      ))}
    </div>
  );
};

export default App;
