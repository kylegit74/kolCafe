import React, { useEffect, useState } from 'react';
// import items from '../data/items';
import MenuGallery from '../components/MenuGallery';
import MenuCategoryFilter from '../components/MenuCategoryFilter';



const OurMenu = ({items}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://kyletest.in/cafe/cafeApi/getAllItems')
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
  

  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = [...new Set(data.map((item) => item.category))].map((category) => {
    return {
      category: category,
      catImg: data.find((item) => item.category === category).catImg,
    };
  });
  
  
  
  
 

  const filteredItems = selectedCategory
      ? data.filter((item) => item.category === selectedCategory)
      : data;

      const handleCategorySelect = (category) => {
        console.log('Selected Category:', category);
        setSelectedCategory(category);
      };
      

  if (loading) {
    // Render a loading message or spinner while data is being fetched
    return <p>Loading...</p>;
  }
return (
  <>
  <div className='container py-5' id='product_items'>
    <h2 className='text-center'>Our Menu</h2>
    <MenuCategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={handleCategorySelect}
    />
    <MenuGallery data={filteredItems} />

  </div>
  </>
)
}

export default OurMenu

