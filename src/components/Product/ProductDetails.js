import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'
import TopLayout from '../TopLayout'
// import Breadcrumbs from '../Breadcrumbs'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
  console.log("Fetching product with id:", id);
  fetch(`http://localhost:3000/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Received product data:", data);
      setProduct(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, [id]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (!product) {
    return <div>Loading...</div>; 
  }
  const formattedQuantity = product.quantity.replace('$', '');
  
  return (
    <div>
    < TopLayout />
    {/* <Breadcrumbs /> */}
    <div className='product-details'>
      <img src={product.image} alt={product.name} className='image-details' />
      <div  className='info-details'>
      <h2 className='name-details'>{product.name}</h2>
      <p className='price-details'>${product.price}</p>
      <p className='product-description'>{product.description}</p>
      {/* <p className='product-variations'>{product.variations}</p> */}
      <div className="quantity-container">
      <div className="down-button"onClick={handleDecreaseQuantity}>▼</div>
      <div className="quantity-value">{quantity}</div>
      <div className="up-button" onClick={handleIncreaseQuantity}>▲</div>
      </div>
      <p className='quantity-details'>
        {formattedQuantity} items left
        <meter value={formattedQuantity} min="0" max="100"></meter>
      </p>
      <div className="details-buttons">
      <button className='add-to-cart-button'>
          Add to Cart
        </button>
        <button className='buy-now-button'>
          Buy Now
        </button> 
      </div>
      </div>

    </div>
    </div>
  );
};

export default ProductDetails;