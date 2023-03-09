import React, { useState, useEffect } from 'react';
import '../App.css';


const Image = ({ src }) => (
<div
  style={{
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    transition: 'all 4500ms ease 0s',
    transform: 'translateZ(0)',
  }}
/> 
);

const Carousel = ({ images, interval = 9000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [index, images.length, interval]);

  return <Image src={images[index]}/>;
};

export default Carousel;