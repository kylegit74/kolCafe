import React from 'react';
import carOne from '../components/images/car1.jpg';

function CarImageOne({ text }) {
  return (
    <img
      className="d-block w-100"
      src={carOne} // Replace with your image URL
      alt={text}
    />
  );
}

export default CarImageOne;
