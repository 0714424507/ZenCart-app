import React, { useState, useEffect } from 'react';
import TopLayout from '../TopLayout'
import Categories from '../Categories';
import AddToCartButton from '../Product/AddToCartButton';


function KidsAndToys({ categoryId }) {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${3}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCategory(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, [categoryId]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TopLayout/>
      <Categories/>
      <div className='category-card'>
        {category.products.map(product => (
          <div key={product.id} className='product-id-cat'>
            <a href={`/products/${product.id}`}><img src={product.image} alt={product.name} className="product-image-cat" /></a>
            <h2 className="product-name">
            <a className="product-link-cat" href={`/product/${product.id}`}>{product.name}</a>
          </h2>
          <p className="product-price-cat">${product.price}</p>
          <AddToCartButton product={product}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidsAndToys;
