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
          className={`btn bg-transparent d-flex flex-column align-items-center fw-bold ${selectedCategory === '' ? 'btn_dashed_golden' : 'btn_dashed_dark'}`}
          onClick={() => onSelectCategory('')}
        >
          <img src={fastFood} alt='all' />
          All
        </button>
        {filteredCategories.map(categoryObject => (
          <button
            key={categoryObject.category}
            className={`btn bg-transparent d-flex flex-column align-items-center fw-bold ${selectedCategory === categoryObject.category ? 'btn_dashed_golden' : 'btn_dashed_dark'}`}
            onClick={() => onSelectCategory(categoryObject.category)}
          >
            <img src={`https://kyletest.in/cafe/${categoryObject.catImg}`} alt='cat' />
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
