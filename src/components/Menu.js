// src/components/Image.js
import React from 'react';
//<img src={imageUrl} alt="Gallery" />
const Menu = ({ imageUrl, itemName, itemPrice, itemDescription }) => {
  return (
            
                <div className='col-xl-6'>
                    <div className='card border-0 flex-row justify-content-between pe-4'>
                    <div className='w-25 p-3' style={{height:'130px'}}>
                        <img className='w-100 h-100 object-fit-cover' src={imageUrl} alt={itemName}/>
                    </div>
                    <div className='w-100 p-3'>
                        <div className='d-flex justify-content-between align-items-center'>
                        <h4>{itemName}</h4>
                        <span className='w-100 mx-3 border_dashed'></span>
                        <p className='m-0 fw-bold'>Price: ₹{itemPrice}</p>
                        </div>
                        <p className='m-0'>{itemDescription}</p>
                    </div>
                    </div>
                </div>
           
  ) 
};
export default Menu;
