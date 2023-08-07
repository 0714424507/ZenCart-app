import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import ProductDetails from './Product/ProductDetails'

function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  return (
    <div>
      <input
        placeholder="Search products"
        className="flex-1 outline-none bg-black text-white"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleSearch();
        }}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;
