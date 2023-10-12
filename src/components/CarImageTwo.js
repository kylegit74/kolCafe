import React from 'react';
import carTwo from '../components/images/car4.jpg';

const CarImageTwo = ({text}) => {
  return (
    <img
      className="d-block w-100"
      src={carTwo} // Replace with your image URL
      alt={text}
    />
  )
}

export default CarImageTwo