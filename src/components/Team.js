import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import pic1 from '../components/images/pic1.jpg';
import pic2 from '../components/images/pic2.jpg';
import pic3 from '../components/images/pic3.jpg';
import pic4 from '../components/images/pic4.jpg';
import { CgShare } from 'react-icons/cg';
// import { Link } from 'react-router-dom';

const options = {
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    margin:10,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
}



const Team = () => {
  return (
    <div className='bg_purple mb-5'>

        <div className='container py-5'>

            <h3 className='pb-5 text-center text-white'>Master Chefs</h3>
        <OwlCarousel {...options} className='owl-theme' loop margin={10} nav>
            <div className='item'>
                <div className='card border-0'>
                    <div className='teamImg'>
                        <img alt='pic1' className='w-100' src={pic1} />
                    </div>
                    <div className='d-flex align-items-center p-3 justify-content-between'>
                        <div className='chefDetails'>
                            <h4>Criss Battle</h4>
                            <h5 className='text-danger fs-6'>Junior Chef</h5>
                        </div>
                         <div><CgShare/></div>
                        
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='card border-0'>
                    <div className='teamImg'>
                        <img alt='' className='w-100' src={pic2} />
                    </div>
                    <div className='d-flex align-items-center p-3 justify-content-between'>
                        <div className='chefDetails'>
                            <h4>Criss Battle</h4>
                            <h5 className='text-danger fs-6'>Junior Chef</h5>
                        </div>
                         <div><CgShare/></div>
                        
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='card border-0'>
                    <div className='teamImg'>
                        <img alt='' className='w-100' src={pic3} />
                    </div>
                    <div className='d-flex align-items-center p-3 justify-content-between'>
                        <div className='chefDetails'>
                            <h4>Criss Battle</h4>
                            <h5 className='text-danger fs-6'>Junior Chef</h5>
                        </div>
                         <div><CgShare/></div>
                        
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='card border-0'>
                    <div className='teamImg'>
                        <img alt='' className='w-100' src={pic4} />
                    </div>
                    <div className='d-flex align-items-center p-3 justify-content-between'>
                        <div className='chefDetails'>
                            <h4>Criss Battle</h4>
                            <h5 className='text-danger fs-6'>Junior Chef</h5>
                        </div>
                         <div><CgShare/></div>
                        
                    </div>
                </div>
            </div>
            <div className='item'>
                 <div className='card border-0'>
                    <div className='teamImg'>
                        <img alt='' className='w-100' src={pic2} />
                    </div>
                    <div className='d-flex align-items-center p-3 justify-content-between'>
                        <div className='chefDetails'>
                            <h4>Criss Battle</h4>
                            <h5 className='text-danger fs-6'>Junior Chef</h5>
                        </div>
                         <div><CgShare/></div>
                        
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='card border-0'>
                    <div className='teamImg'>
                        <img alt='' className='w-100' src={pic4} />
                    </div>
                    <div className='d-flex align-items-center p-3 justify-content-between'>
                        <div className='chefDetails'>
                            <h4>Criss Battle</h4>
                            <h5 className='text-danger fs-6'>Junior Chef</h5>
                        </div>
                         <div><CgShare/></div>
                        
                    </div>
                </div>
            </div>
        
        </OwlCarousel>
        </div>
    
    </div>
  )
}

export default Team