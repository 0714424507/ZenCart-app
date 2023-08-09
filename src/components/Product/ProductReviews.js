import React, { useState } from 'react';
import './ProductDetails.css'; 

const ProductReviews = () => {
  const [rating, setRating] = useState(0);



  return (
    <div className="customer-reviews">
      <div className="review">
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? 'filled' : ''}`}
              onClick={() => setRating(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
