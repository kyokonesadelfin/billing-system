import React from 'react';
import Carousel from './Carousel';
import '../App.css';

const images = [
  './assets/01-carouselpic.jpg',
  './assets/001-carouselpic.jpg',
  './assets/002-carouselpic.jpg',
  './assets/003-carouselpic.jpg',
  './assets/004-carouselpic.jpg',
  './assets/04-carouselpic.jpg',
  './assets/05-carouselpic.jpg',
  './assets/07-carouselpic.jpg',
  './assets/08-carouselpic.jpg'
];

const Imagescarousel = () => (
  <Carousel images={images} />
);

export default Imagescarousel;