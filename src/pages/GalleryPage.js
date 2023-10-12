import React from 'react';
import MainLayout from '../layout/MainLayout';
import GalleryMain from '../components/GalleryMain';

const GalleryPage = () => {
  return (
    <MainLayout>
        <div>
        <div className='about_header d-flex justify-content-center align-items-center py-5'>
          <h2 className='fs-2 text-white'>Gallery</h2>
        </div>
        <GalleryMain/>
        </div>
      </MainLayout>
  )
}

export default GalleryPage