import React from 'react';

const Breadcrumbs = ({ categories }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        {categories.map((category, index) => (
          <li key={index} className="breadcrumb-item">
            <a href={category.link}>{category.name}</a>
            {index !== categories.length - 1 && <span className="breadcrumb-separator">{' > '}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
