import React from 'react';
import OurMenu from '../components/OurMenu.js';
import Team from '../components/Team';
import Reviews from '../components/Reviews';
import ReserveForm from '../components/ReserveForm';
// import CafeItemList from "./components/CafeItemList";
import Banner from '../components/Banner';
import BestOffer from '../components/BestOffer';
import MainLayout from '../layout/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <Banner/>
      <BestOffer/> 
      <OurMenu/>
      <Team/>
      {/* <CafeItemList/> */}
      <ReserveForm/>
      <Reviews/> 
    </MainLayout>
  )
}

export default Home