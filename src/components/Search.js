import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      product.description.toLowerCase().includes(searchValue.toLowerCase())
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

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    handleSearch();
  };

  return (
    <div className='search-bar'>
      <input
        placeholder="Search products"
        className="flex-1 outline-none bg-black text-white"
        value={searchValue}
        onChange={handleSearchInputChange}
      />
      <button className='search-button'>SEARCH</button>
      {searchValue && (
        <ul className='search-results'>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`} className='search-result-link'>
                <img src={product.image} alt={product.name} className='search-result-image' />
                <span className='search-result-name'>{product.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Searchbar;
