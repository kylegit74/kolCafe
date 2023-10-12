import React from 'react';
import fastFood from '../components/images/fast-food.png';

const MenuCategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  // Filter out categories with blank catImg URLs and non-null category values
  const filteredCategories = categories.filter(categoryObject => (
    categoryObject.catImg !== '' && categoryObject.category !== null
  ));

  return (
    <div className="image-category-filter text-center py-5">
      <div id='category_btns' className='d-flex justify-content-center gap-4 category-buttons'>
        <button
          className={`btn border-0 bg-transparent d-flex flex-column align-items-center fw-bold ${selectedCategory === '' ? 'btn-warning' : 'btn-outline-warning'}`}
          onClick={() => onSelectCategory('')}
        >
          <img src={fastFood} alt='all' />
          All
        </button>
        {filteredCategories.map(categoryObject => (
          <button
            key={categoryObject.category}
            className={`btn border-0 bg-transparent d-flex flex-column align-items-center fw-bold ${selectedCategory === categoryObject.category ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => onSelectCategory(categoryObject.category)}
          >
            <img src={`http://kyletest.in/cafe/backend/${categoryObject.catImg}`} alt='cat' />
            {categoryObject.category}
            {/* Log the image URL for debugging */}
            {console.log(categoryObject.catImg)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryFilter;
