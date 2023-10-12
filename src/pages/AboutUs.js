import React from 'react';
import MainLayout from '../layout/MainLayout';
import ReserveForm from '../components/ReserveForm';

const AboutUs = () => {
  return (


      <MainLayout>
        <div className='about_header d-flex justify-content-center align-items-center py-5'>
          <h2 className='fs-2 text-white'>About Us</h2>
        </div>
        <div className='container py-5'>
          <h3 className='pb-3'>About Kolkata Cafe</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <ReserveForm/>
      </MainLayout>

  )
}

export default AboutUs