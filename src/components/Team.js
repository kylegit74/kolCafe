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
import chef from '../components/images/chef.png';

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
            items:2
        },
        1000:{
            items:3
        }
    }
}



const Team = () => {
  return (
    <div className='mb-5 team_bg position-relative'>
        <img className='position-absolute chef_png start-0 top-0 h-100 z-n1' src={chef} alt=''/>

        <div className='container py-5'>

            
            <div className='row align-items-center mt-5 py-5'>
                <div className='col-xl-4'>
                <h3 className='pb-5 text-center'><span className='text-white'>Master</span> Chefs</h3>
                </div>
                <div className='col-xl-8'>
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
        </div>
    
    </div>
  )
}

export default Team