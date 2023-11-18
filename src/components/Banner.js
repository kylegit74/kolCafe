import React, { Fragment } from 'react';
import Carousel from '../../node_modules/react-bootstrap/Carousel';
import CarImageOne from './CarImageOne';
import CarImageTwo from './CarImageTwo';
import CarImageThree from './CarImageThree';
import {CgMouse} from 'react-icons/cg';
// import CarImage2 from '../images/car1.jpg';
import biriyani from '../components/images/biryani_banner.jpg';


function Banner() {
  return (
    <Fragment>

    <div className='offer_banner position-relative'>


      <div className='banner_offer_image'>
        <img src={biriyani} alt='' className='w-100'/>
      </div>

      <span className='position-absolute w-100 d-flex align-items-center h-100 top-0 z-1'>
        <div className='container'>
        {/* <a href='#'>
          <button className='border-0 shadow px-4 py-2 bg_purple text-white'>
            Scroll <CgMouse/>
          </button>
        </a> */}
        <h3 className='w-50 text-white display-4'>
        Indulge in Flavorful Bliss: <br/>
        <span className='sig_h'>Where Every Grain Tells a Tale of Biriyani Love!</span> 
        </h3>
        </div>
      </span>

    </div>
    

    
  
    </Fragment>
  )
}

export default Banner