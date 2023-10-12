import React from 'react'

const ReserveForm = () => {
  return (
    <>
    <div className='container pb-5'>
        <div className='card border-0 shadow p-4'>
        <h3 className='text-center py-3 text-danger'>Reservation Enquiry Form</h3>
        <form method='post'>
            <div className='form-control w-50 d-inline-block border-0'>
                <label className='form-control border-0'>Name</label>
                <input className='form-control' type='text' placeholder='Enter Your Name'/>
            </div>
            <div className='form-control w-50 d-inline-block border-0'>
                <label className='form-control border-0'>Email</label>
                <input className='form-control' type='email' placeholder='Enter Your Email'/>
            </div>
            <div className='form-control w-50 d-inline-block border-0'>
                <label className='form-control border-0'>Phone Number</label>
                <input className='form-control' type='number' placeholder='Enter Your Phone Number'/>
            </div>
            <div className='form-control w-50 d-inline-block border-0'>
                <label className='form-control border-0'>Members</label>
                <input className='form-control' type='number' placeholder='0'/>
            </div>
            <div className='form-control d-inline-block border-0'>
                <label className='form-control border-0'>Message</label>
                <textarea className='form-control' type='number' placeholder='Enter Your Message Here'/>
            </div>
            <div className='con_submit form-control border-0 text-center py-4'>
                <button className='btn bg-success text-white fw-bold'>Submit</button>
            </div>
        </form>
        </div>
    </div>

    </>
  )
}
export default ReserveForm