import React from 'react';
import noodles from '../components/images/noodles.jpg';
import pancake from '../components/images/pancake.jpg';
import pizza from '../components/images/pizza.jpg';


const specialItems = [
    {
            imgUrl:noodles,
            foodName:'Noodles',
            content:'Non-Veg'
    },
    {
            imgUrl:pancake,
            foodName:'Pancake',
            content:'Non-Veg'
    },
    {
            imgUrl:pizza,
            foodName:'Pizza',
            content:'Non-Veg'
    },
    {
            imgUrl:noodles,
            foodName:'Hakka Noodles',
            content:'Veg'
    },

]

const TodaySpecial = () => {
  return (
    <>
        <section className='today_special py-5'>
            <div className='container'>
                <h3 className='text-center text-white z-1 position-relative'>Today's Special</h3>
                <div className='row py-5'>
                    {specialItems.map((offer,index)=>(
                    <div key={index} className='col-xl-3'>
                        <div className='card py-3 px-3 border-0 align-items-center z-1'>
                            <div className='w-100 '>
                                <img style={{height:'225px',objectFit:'cover'}} src={offer.imgUrl} className='w-100 rounded' alt={offer.foodName}/>                                                
                            </div>
                        <div className='d-flex align-items-center justify-content-between w-100 pt-4'>
                            <h4 className='m-0'>{offer.foodName}</h4>
                            <p className='m-0'>{offer.content}</p>
                        </div>
                        </div>
                    </div>   
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default TodaySpecial