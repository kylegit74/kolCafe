// src/components/ImageGallery.js
import React from 'react';
import Image from './Image';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery container d-flex flex-wrap gap-5">
      {images.map((image) => (
        <Image key={image.id} imageUrl={image.url} />
      ))}
    </div>
  );
};

export default ImageGallery;
