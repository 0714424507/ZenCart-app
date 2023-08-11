import React, { useState, useEffect } from 'react';
import './Seller.css'
import SellerNav from './SellerNav';

function AddProductForm() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productColor, setProductColor] = useState('');
  const [productTags, setProductTags] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [variationName, setVariationName] = useState('');
  const [variationValue, setVariationValue] = useState('');

  useEffect(() => {
    // Fetch categories from your backend API
    fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        // Assuming the first category is selected by default
        setSelectedCategory(data[0]?.id || '');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      image: productImage,
      quantity: productQuantity,
      variations: [
        {
          name: variationName,
          value: JSON.stringify([variationValue]),
        },
        {
          name: 'Color',
          value: JSON.stringify([productColor]),
        },
      ],
      tags: JSON.stringify([productTags]),
      category_id: selectedCategory,
    };

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        // Product successfully added
        alert('Product added successfully!');
        // Clear the form fields
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductImage('');
        setProductQuantity('');
        setProductColor('');
        setProductTags('');
        setVariationName('');
        setVariationValue('');
      } else {
        // Handle error
        alert('Error adding product. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
    <SellerNav/>
    <div className='form_container'>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
      <label className="input-label">
          Product Name:
          <br />
          <input className="input-field" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </label>
        
        <label className="input-label">
          Product Description:
          <br />
          <textarea className="input-field" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
        </label>
     
        <label className="input-label">
          Price:
          <br />
          <input className="input-field" type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
        </label>
       
        <label className="input-label">
          Image URL:
          <br />
          <input className="input-field" type="url" value={productImage} onChange={(e) => setProductImage(e.target.value)} required />
        </label>
      
        <label className="input-label">
          Quantity:
          <br />
          <input className="input-field" type="text" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} required />
        </label>
      
        <label className="input-label">
          Variation Name:
          <br />
          <input className="input-field" type="text" value={variationName} onChange={(e) => setVariationName(e.target.value)} required />
        </label>
        <label className="input-label">
          Variation Value:
          <br />
          <input className="input-field" type="text" value={variationValue} onChange={(e) => setVariationValue(e.target.value)} required />
        </label>
        <br />
        <label className="input-label">
          Category:
          <br />
          <select className="input-field" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button className='product_button' type="submit">Add Product</button>
      </form>
    </div>
    </>
  );
}

export default AddProductForm;



