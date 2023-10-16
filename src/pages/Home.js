import React from 'react';
import OurMenu from '../components/OurMenu.js';
import Team from '../components/Team';
import Reviews from '../components/Reviews';
import ReserveForm from '../components/ReserveForm';
// import CafeItemList from "./components/CafeItemList";
// import Banner from '../components/Banner';
import BestOffer from '../components/BestOffer';
import MainLayout from '../layout/MainLayout';
import VideoBanner from '../components/VideoBanner.js';
import TodaySpecial from '../components/TodaySpecial.js';

const Home = () => {
  return (
    <MainLayout>
      <VideoBanner/>
      {/* <Banner/> */}
      <BestOffer/> 
      <TodaySpecial/>
      <OurMenu/>
      <Team/>
      {/* <CafeItemList/> */}
      <ReserveForm/>
      <Reviews/> 
    </MainLayout>
  )
}

export default Home