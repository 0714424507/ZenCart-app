import React, { useEffect, useState } from 'react';
import SellerNav from './SellerNav';

function Seller() {
  const [sellerData, setSellerData] = useState(null);

  useEffect(() => {
    // Assuming you have access to the seller's ID from authentication or session
    const sellerId = 7; // Replace with the actual seller's ID

    fetch(`http://localhost:3000/shops/${sellerId}`)
      .then(response => response.json())
      .then(data => {
        setSellerData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  if (!sellerData) {
    return <div>Loading...</div>;
  }

  const { name, description, seller, Products } = sellerData;

  return (
    <>
      <SellerNav/>
      <div className="seller-profile">
        <h2>{name || 'No Name'}</h2>
        <p>{description || 'No Description'}</p>
        <h3>Seller: {seller?.name || 'No Seller Name'}</h3>
        <p>Email: {seller?.email || 'No Seller Email'}</p>
        <p>Shop Name: {seller?.shop_name || 'No Shop Name'}</p>
        
        <h3>Products:</h3>
        <ul>
          {Products?.map(product => (
            <li key={product.id}>
              <h4>{product.name || 'No Product Name'}</h4>
              <p>{product.description || 'No Product Description'}</p>
              <p>Price: ${product.price / 100 || 'N/A'}</p>
              <img src={product.image || ''} alt={product.name} style={{ maxWidth: '200px' }} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Seller;
