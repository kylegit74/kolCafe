import React from 'react';
import {FaTicketAlt} from 'react-icons/fa';
import {CgIcecream} from 'react-icons/cg';
import {CgPushUp} from 'react-icons/cg';
import aboutFood from './images/about_food.jpg';
import aboutResturant from './images/about_resturant.jpg';


// const BestOfferContent = [
//     {
//             iconName:<FaTicketAlt/>,
//             headline:'Discount Voucher',
//             content:'lorem ipsum dolor shit amet lorem ipsum'
//     },
//     {
//             iconName:<CgIcecream/>,
//             headline:'Fresh Healthy Food',
//             content:'lorem ipsum dolor shit amet lorem ipsum'
//     },
//     {
//             iconName:<CgPushUp/>,
//             headline:'Fast Serve On Table',
//             content:'lorem ipsum dolor shit amet lorem ipsum'
//     },

// ]

const BestOffer = () => {
  return (
    <>
    <div className='home_about py-5'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-xl-6'>
                    <div className='about_imgs'>
                        <img src={aboutResturant} alt='' className='aboutResturant'/>                    
                    </div>
                </div>
                <div className='col-xl-6'>
                    <h3>
                        Delicious food & exquisite drinks
                    </h3>
                    <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum.
                    </p>
                    <button className='border-0 bg-black px-3 py-2 text-white fw-bold'>More About Us</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BestOffer

{/* <section className='best_offer'>
        <div className='container'>
            <div className='row py-5'>
                {BestOfferContent.map((offer,index)=>(
                <div key={index} className='col-xl-4'>
                    <div className='card bg-transparent border-0 flex-row align-items-center justify-content-between'>
                        <div className='offer_icon fs-1 mb-2 bg_purple text-white shadow px-1 pb-2'>                       
                            {offer.iconName}  
                        </div>
                       <div>
                        <h4>{offer.headline}</h4>
                        <p className='m-0'>{offer.content}</p>
                       </div>
                    </div>
                </div>   
                ))}
            </div>
        </div>
    </section> */}