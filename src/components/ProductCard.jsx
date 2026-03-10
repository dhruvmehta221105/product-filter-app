function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p className="price">₹{product.price}</p>
    </div>
  );
}

export default ProductCard;