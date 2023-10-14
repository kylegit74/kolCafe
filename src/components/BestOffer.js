import React from 'react';
import {FaTicketAlt} from 'react-icons/fa';
import {CgIcecream} from 'react-icons/cg';
import {CgPushUp} from 'react-icons/cg';

const BestOffer = () => {
  return (
    <>
    <section className='best_offer shadow bg_theme_light'>
        <div className='container'>
            <div className='row py-5'>
                <div className='col-xl-4'>
                    <div className='card bg-transparent border-0 flex-row align-items-center justify-content-between'>
                        <div className='offer_icon fs-1 mb-2 bg_purple text-white shadow px-1 pb-2'>                       
                            <FaTicketAlt/>       
                        </div>
                       <div>
                        <h4>Discount Voucher</h4>
                        <p className='m-0'>lorem ipsum dolor shit amet lorem ipsum</p>
                       </div>
                    </div>
                </div>   
                <div className='col-xl-4'>
                <div className='card bg-transparent border-0 flex-row align-items-center justify-content-between'>
                        <div className='offer_icon fs-1 mb-2 bg_purple text-white shadow px-1 pb-2'>
                         <CgIcecream/>
                        </div>
                       <div>
                        <h4>Fresh Healthy Food</h4>
                        <p>lorem ipsum dolor shit amet lorem ipsum</p>
                       </div>
                    </div>
                </div>
                <div className='col-xl-4'>
                <div className='card bg-transparent border-0 flex-row align-items-center justify-content-between'>
                        <div className='offer_icon fs-1 mb-2 bg_purple text-white shadow px-1 pb-2'>
                        <CgPushUp/>
                        </div>
                       <div>
                        <h4>Fast Serve On Table</h4>
                        <p>lorem ipsum dolor shit amet lorem ipsum</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BestOffer