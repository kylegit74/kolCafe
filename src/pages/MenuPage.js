import React from 'react';
import MainLayout from '../layout/MainLayout';
import OurMenu from '../components/OurMenu';

const MenuPage = () => {
  return (
    <MainLayout>
        <div className='page_menu'>
        <div className='about_header d-flex justify-content-center align-items-center py-5'>
          <h2 className='fs-2 text-white'>Menu</h2>
        </div>
          <OurMenu/>
        </div>
    </MainLayout>
  )
}

export default MenuPage