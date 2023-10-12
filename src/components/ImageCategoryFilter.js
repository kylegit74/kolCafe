import React from 'react';

const ImageCategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="image-category-filter text-center py-5">
      <div className="category-buttons">
        <button
          className={`btn ${selectedCategory === '' ? 'btn-warning' : 'btn-outline-warning'}`}
          onClick={() => onSelectCategory('')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCategoryFilter;
