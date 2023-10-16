import React from 'react';
import ReactPlayer from 'react-player';
import video from './images/background_cafe.mp4';
import img from './images/banner_video_thumbnill.png';
import bnrFood from './images/banner_food.png';
import bnrDrink from './images/banner_drink_2.jpg';
import bnrDrinktr from './images/banner_drink_tran.png';

const VideoBanner = () => {
  return (
    <div className='banner_video postion-relative'>
      <div className='container'>
        <div className='header_content position-absolute d-flex justify-content-center h-100 flex-column'>
          <p className='text-white m-0'>TASTY FOOD <span>
            <img className='bnrFood' src={bnrFood} alt=''/></span> <br/> & 
          <span><img className='bnrDrink' src={bnrDrinktr} alt=''/></span> DRINKS</p>
          {/* <p className='text-white'>Somthing is about Cafe Kolkata, welcome to our cafe.</p> */}
        </div>
      </div>
        <ReactPlayer width={'100%'} height={'100%'} light={<img className='w-100 h-100 object-fit-cover' src={img} alt='banner_video_thumbnill'/>} loop={true} url={video} playing={true} controls={false}/>
    </div>
  )
}

export default VideoBanner