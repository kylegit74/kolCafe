import React from 'react';
import noodles from '../components/images/noodles.jpg';
import pancake from '../components/images/pancake.jpg';
import pizza from '../components/images/pizza.jpg';
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


const specialItems = [
    {
            imgUrl:noodles,
            foodName:'Noodles',
            content:'Non-Veg'
    },
    {
            imgUrl:pancake,
            foodName:'Pancake',
            content:'Non-Veg'
    },
    {
            imgUrl:pizza,
            foodName:'Pizza',
            content:'Non-Veg'
    },
    {
            imgUrl:noodles,
            foodName:'Hakka Noodles',
            content:'Veg'
    },

];
const options = {
    loop:true,
    items:3,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    smartSpeed:2000,
    margin:10,
    dots:false,
    nav:false,
  }

const TodaySpecial = () => {
  return (
    <>
        <section className='today_special py-5'>
            <div className='container'>           
                <div className='row align-items-center'>
                    <div className='col-xl-3'>
                    <span className='text-white z-1 position-relative display-6'>Our</span>
                    <h3 className='z-1 position-relative sig_h'>Signature Dishes</h3>
                    </div>
                    <div className='col-xl-9'>

                            <OwlCarousel {...options} className='owl-theme offer_banner position-relative' loop margin={10} nav>
                            {specialItems.map((offer,index)=>(
                                <div className='item'>
                                    
                                    <div key={index}>
                                        <div className='card border-0 bg-transparent align-items-center z-1 special_card'>
                                            <div className='w-100 '>
                                                <img style={{height:'300px',objectFit:'cover'}} src={offer.imgUrl} className='w-100 rounded-4' alt={offer.foodName}/>                                                
                                            </div>
                                        <div className='d-flex w-100 position-absolute flex-column text-center bottom-0'>
                                            <h4 className='mb-3 sig_h position-relative z-1'>{offer.foodName}</h4>
                                            {/* <p className='m-0'>{offer.content}</p> */}
                                        </div>
                                        </div>
                                    </div>   
                                    
                                </div> 
                                ))}
                            
                            </OwlCarousel>                         
                   
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TodaySpecial