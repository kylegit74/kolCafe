import React, { useState } from 'react';
import images from '../data/images';
import ImageGallery from './ImageGallery';
import ImageCategoryFilter from './ImageCategoryFilter';
const GalleryMain = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = [...new Set(images.map((image) => image.category))];

    const filteredImages = selectedCategory
        ? images.filter((image) => image.category === selectedCategory)
        : images;

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
  return (
    <>
    <div className="gallery_por pb-5">
      {/* <h1 className='text-center'>Gallery</h1> */}
      <ImageCategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <ImageGallery images={filteredImages} />
    </div>
    </>
  )
}

export default GalleryMain