import React from 'react';
import powder from './images/powder.png';
import formbg from './images/form_bg.jpg';

const ReserveForm = () => {
  return (
    <>
    <div className='reserve_form position-relative'>
        <div className='form_side_image'>
            <img className='position-absolute h-100 top-0 start-0' src={powder}/>
        </div>
        
        <div className='py-5'>
            <div className='card border-0 shadow py-4 form_card w-75 ms-auto rounded-start-pill'>
                <div className='form_card_after rounded-start-pill z-1'></div>
                <img className='w-100 top-0 start-0 h-100 position-absolute object-fit-cover rounded-start-pill' alt='' src={formbg}/>
            <h3 className='text-center py-3 text-danger position-relative z-2'>Reservation Enquiry Form</h3>
            <form method='post' className='position-relative z-2 home_form'>
                <div className='form-control w-50 d-inline-block border-0 bg-transparent'>
                    <label className='border-0'>Name</label>
                    <input className='form-control' type='text' placeholder='Enter Your Name'/>
                </div>
                <div className='form-control w-50 d-inline-block border-0 bg-transparent'>
                    <label className='border-0'>Email</label>
                    <input className='form-control' type='email' placeholder='Enter Your Email'/>
                </div>
                <div className='form-control w-50 d-inline-block border-0 bg-transparent'>
                    <label className='border-0'>Phone Number</label>
                    <input className='form-control' type='number' placeholder='Enter Your Phone Number'/>
                </div>
                <div className='form-control w-50 d-inline-block border-0 bg-transparent'>
                    <label className='border-0'>Members</label>
                    <input className='form-control' type='number' placeholder='0'/>
                </div>
                <div className='form-control d-inline-block border-0 bg-transparent'>
                    <label className='border-0'>Message</label>
                    <textarea className='form-control' type='number' placeholder='Enter Your Message Here'/>
                </div>
                <div className='con_submit form-control border-0 text-center py-4 bg-transparent'>
                    <button className='btn bg-success text-white fw-bold'>Submit</button>
                </div>
            </form>
            </div>
        </div>
    </div>

    </>
  )
}
export default ReserveForm