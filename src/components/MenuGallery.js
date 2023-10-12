import React, { useEffect, useState } from 'react';
import Menu from './Menu';

const MenuGallery = ({ data }) => { // Updated the prop name to 'data'

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Remove the fetch logic for data, as it's now received as a prop
  }, []);

  if (loading) {
    // Render a loading message or spinner while data is being fetched
    return <p>Loading...</p>;
  }
  return (
    <div className='row py-5 g-4'>
      {data && data.length > 0 ? (
        data.map(item => (
          <Menu
            key={item.id}
            imageUrl={`http://kyletest.in/cafe/${item.image}`} 
            itemName={item.food_name}
            itemPrice={item.price}
            itemDescription={item.short_des}
          />
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default MenuGallery;
