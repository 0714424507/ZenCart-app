import React, { useState, useEffect } from 'react';
import AddToCartButton from './AddToCartButton';
import './ProductCard.css';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='product-card'>
      {products.map((product) => (
        <div key={product.id} className='product-id'>
          <a href={`/product/${product.id}`}><img src={product.image} alt={product.name} className="product-image" /></a>
          <h2 className="product-name">
            <a className="product-link" href={`/product/${product.id}`}>{product.name}</a>
          </h2>
          <p className="product-price">${product.price}</p>
          <AddToCartButton product={product} />
        </div>
      ))}
    </div>
  );
};

//   return (
//     <div className='product-card'>
//       {products.map((product) => (
//         <div key={product.id} className='product-id'>
//           <img src={product.image} alt={product.name} className="product-image" />
//           <h2 className="product-name">
//             <a className="product-link" href={`/product/${product.id}`}>{product.name}</a>
//           </h2>
//           <p className="product-price">${product.price}</p>
//           <AddToCartButton product={product} />
//         </div>
//       ))}
//     </div>
//   );
// };

export default ProductCard;
