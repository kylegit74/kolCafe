import React from 'react';

import NavTop from '../components/NavTop.js';
import Footer from '../components/Footer.js';

// import StickyNavbar from '../components/StickyNav.js';

const MainLayout = ({children}) => {
  return (
    <>
    <NavTop/>  
    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default MainLayout