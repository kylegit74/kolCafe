import React from 'react';
// import bnrFood from './images/banner_food.png';
import vagitables from './images/vegitables_small.png';
import veg1 from './images/tomato_small.png';
import veg2 from './images/brocoli_small.png';
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import { CgArrowDown, CgEditBlackPoint, CgMouse, CgShare } from 'react-icons/cg';

const options = {
  loop:true,
  items:1,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  smartSpeed:2000,
  margin:10,
  dots:false,
  nav:false,
}

const VideoBanner = () => {
  return (
    <div className='banner_video postion-relative align-items-center d-flex'>
      <div className='container'>
        <div className='header_content position-absolute d-flex justify-content-center h-100 flex-column top-0'>
          <p className='text-white m-0'>TASTY FOOD 
          <span>
            <img className='bnrFood' src={vagitables} alt=''/>
            <img className='veg1 position-absolute z-1' src={veg1} alt=''/>
            <img className='veg2 position-absolute z-1' src={veg2} alt=''/>
          </span>
          </p>
        </div>
        <div className='.single_veg'>
          {/* <img className='' src={}/>
          <img className='' src={}/>
          <img className='' src={}/> */}
        </div>
        <OwlCarousel {...options} className='owl-theme owl_banner position-relative' loop margin={10} nav>
            <div className='item'>
                <div className='card border-0 bg-transparent'>
                    <div className='d-flex align-items-center p-5 justify-content-between'>
                        <div className='chefDetails'>
                        <h5 className='color_golden fs-6'>Welcome to</h5>
                          <h4 className='text-white'>Dosa Cafe Kolkata</h4>                           
                        </div>                      
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='card border-0 bg-transparent'>
                    <div className='d-flex align-items-center p-5 justify-content-between'>
                        <div className='chefDetails'>
                        <h5 className='color_golden fs-6'>Welcome to</h5>
                          <h4 className='text-white'>Dosa Cafe Kolkata</h4>        
                        </div>                     
                    </div>
                </div>               
            </div>
        
        </OwlCarousel>
        <div className='d-flex fs-4 justify-content-center align-items-center text-white mt-5 flex-column'>
          <CgMouse/>
          <span>⁞</span>
          <CgArrowDown/>
        </div> 
      </div>
        
    </div>
  )
}

export default VideoBanner