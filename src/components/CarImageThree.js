import React from 'react';
import carThree from '../components/images/car3.jpg';

const CarImageThree = ({text}) => {
  return (
    <img
      className="d-block w-100"
      src={carThree} // Replace with your image URL
      alt={text}
    />
  )
}

export default CarImageThree