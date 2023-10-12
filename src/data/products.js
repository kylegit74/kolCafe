// src/data/products.js
import pizza from '../components/images/pizza.jpg';
import pancake from '../components/images/pancake.jpg';
import coldDrink from '../components/images/iced-coffee.png';
import pizzaIcon from '../components/images/pizza.png';
import salad from '../components/images/salad.png';


const products = [
    {
      _id: 1,
      name:'Pulled Chicken SandWich',
      price:'$10',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      url: pizza,
      category: 'Cold Drink',
      catImg:coldDrink
    },
    {
      _id: 2,
      name:'pancake',
      price:'$10',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      url: pancake,
      category: 'Pizza',
      catImg:pizzaIcon
    },
    {
        _id: 3,
        name:'pizza',
        price:'$10',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: pizza,
        category: 'Salad',
        catImg:salad
      },
      {
        _id: 4,
        name:'pizza',
        price:'$10',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: pancake,
        category: 'Sweets',
        catImg:salad
      },
      {
        _id: 5,
        name:'pizza',
        price:'$10',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: pizza,
        category: 'Spicy',
        catImg:salad
      },
      {
        _id: 6,
        name:'pizza',
        price:'$10',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: pancake,
        category: 'Burger',
        catImg:salad
      },
    // Add more products with different categories
  ];
  
  export default products;
  