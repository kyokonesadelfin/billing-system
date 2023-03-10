import React, { useState, useEffect } from 'react';
import '../App.css';

const testimonials = [
  {
    name: 'John Doe',
    image: '/assets/john_smith.jpg',
    description: '- TODA Member/Tricycle driver, since 2011',
    testimonial: 'This is an amazing product. I highly recommend it to everyone.'
  },
  {
    name: 'Jane Doe',
    image: '/assets/jane_smith.jpg',
    description: '-Tricycle driver, since 2007',
    testimonial: 'I have been using this product for a while now and I am extremely satisfied with it.'
  },
  {
    name: 'Jim Smith',
    image: '/assets/john_doe.jpg',
    description: '- Driver, since 2010',
    testimonial: 'I was skeptical about trying this product at first, but I am glad I did. It has exceeded my expectations.'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % testimonials.length);
    }, 4000);
    setIntervalId(id);
    
    return () => {
      clearInterval(id);
    };
  }, [currentIndex]);
  

  return (
    <div className="testimonials-container">
      <div className="testimonial">
        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
        <div id='testimonials-identity'>
        <h3>{testimonials[currentIndex].name}</h3>
        <p id='description'>{testimonials[currentIndex].description}</p>
        </div>
        <p>"{testimonials[currentIndex].testimonial}"</p>
      </div>
    </div>
  );
};

export default Testimonials;
