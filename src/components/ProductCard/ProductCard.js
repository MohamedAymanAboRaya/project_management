import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onDelete, onUpdate }) => {
  return (
    <div className="product-card">
      {product.sale && <div className="sale-badge">Sale</div>}
      <p>Code: {product.code}</p>
      <p>Count: {product.count}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price.toFixed(2)}</p>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
      <button className="update-btn" onClick={onUpdate}>
        Update
      </button>
    </div>
  );
};

export default ProductCard;
