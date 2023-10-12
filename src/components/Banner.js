import React, { Fragment } from 'react';
import Carousel from '../../node_modules/react-bootstrap/Carousel';
import CarImageOne from './CarImageOne';
import CarImageTwo from './CarImageTwo';
import CarImageThree from './CarImageThree';
import {CgMouse} from 'react-icons/cg';
//import CarImage2 from '../images/car1.jpg';
//import CarImage3 from '../images/car3.jpg';


function Banner({banner}) {
  return (
    <Fragment>

    <Carousel className="banner_car">
      <Carousel.Item>
        <CarImageOne text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarImageTwo text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarImageThree text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    <span className='position-absolute w-100 d-flex justify-content-center bottom-0 mb-5 z-1'>
      <a href='#product_items'>
        <button className='border-0 shadow px-4 py-2 bg_purple text-white'>
          Scroll <CgMouse/>
        </button>
      </a>
    </span>

    
  
    </Fragment>
  )
}

export default Banner