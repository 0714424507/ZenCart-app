import React from 'react';
import ProductCard from './ProductCard'; ts

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div>
      <h3>Related Products</h3>
      <div className="related-products">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
