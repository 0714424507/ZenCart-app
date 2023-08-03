import React, { useState, useEffect } from 'react';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the specific product details based on the productId
    fetch(`http://localhost:3000/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-availability">Availability: {product.availability}</p>
      <p className="product-category"> {product.availability}</p>
      {product.availability === 'available' ? (
        <div className="product-availability">
          Availability: <span className="dot dot-green" />
        </div>
      ) : (
        <div className="product-availability">
          Availability: Out of Stock
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
