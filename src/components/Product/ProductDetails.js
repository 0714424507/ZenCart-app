import React, { useState, useEffect } from 'react';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const quantityClassName = product.quantity === 0 ? 'out-of-stock' : 'in-stock';

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      <p className={`product-quantity ${quantityClassName}`}>
        {product.quantity === 0 ? 'Out of Stock' : `${product.quantity} items left`}
      </p>
      <p className="product-category">{product.category_id}</p>
    </div>
  );
};

export default ProductDetails;
