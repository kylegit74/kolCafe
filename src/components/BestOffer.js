import React from 'react';
// import {FaTicketAlt} from 'react-icons/fa';
// import {CgIcecream} from 'react-icons/cg';
// import {CgPushUp} from 'react-icons/cg';
// import aboutFood from './images/about_food.jpg';
import aboutResturant from './images/about_resturant.jpg';
import dosa from './images/dosa.png';


const BestOffer = () => {
  return (
    <>
    <div className='home_about py-5'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-xl-6'>
                    <div className='about_imgs'>
                        <img src={dosa} alt='' className='aboutResturant'/>                    
                    </div>
                </div>
                <div className='col-xl-6'>
                    <span className='color_golden fw-bold display-6 fs-6 span_headline'>About company</span>
                    <h3>
                        Delicious food & exquisite drinks
                    </h3>
                    <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum.
                    </p>
                    <button className='border-0 btn_bg_golden px-3 py-2 text-white fw-bold rounded'>More About Us</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BestOffer

