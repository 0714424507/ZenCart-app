import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page); 
  };

  const renderPaginationItems = () => {
    const pages = [];

    // Display a maximum of 5 pages in the pagination bar
    const maxPages = Math.min(totalPages, currentPage + 2);

    // Start the pagination from the current page - 2, but ensure the starting page is at least 1
    const startPage = Math.max(1, currentPage - 2);

    for (let page = startPage; page <= maxPages; page++) {
      pages.push(
        <button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>
      {renderPaginationItems()}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
