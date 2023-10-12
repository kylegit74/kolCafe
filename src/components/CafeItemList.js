import React, { useEffect, useState } from 'react';

const CafeItemList = ({ items }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/cafe/backend/cafeApi/getAllItems')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the data received from the API
        setData(data); // Update the component state with the data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error(error); // Handle any errors
        setLoading(false); // Set loading to false in case of errors
      });
  }, []);

  if (loading) {
    // Render a loading message or spinner while data is being fetched
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data && data.length > 0 ? (
        data.map(item => (
          <div key={item.id}>
            <h3>{item.food_name}</h3>
            <img src={item.image} alt={item.food_name} />
            <p>Category: {item.food_category}</p>
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default CafeItemList;
