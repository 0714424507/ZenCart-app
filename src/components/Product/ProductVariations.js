import React, { useState } from 'react';
import './ProductDetails.css'

const ProductVariations = ({ variations, onSelectVariation }) => {
  const [selectedVariation, setSelectedVariation] = useState(null);

  const handleSelectVariation = (variation) => {
    setSelectedVariation(variation);
    onSelectVariation(variation);
  };

  if (!variations || variations.length === 0) {
    return null;
  }

  return (
    <div className="product-variations">
      <div className="variation-buttons">
        {variations.map((variation) => (
          <button
            key={variation.id}
            className={`variation-button ${selectedVariation === variation ? 'selected' : ''}`}
            onClick={() => handleSelectVariation(variation)}
          >
            {variation.name === 'Color' ? (
              <span className="color-circle" style={{ backgroundColor: variation.value }}></span>
            ) : (
              variation.value
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductVariations;
