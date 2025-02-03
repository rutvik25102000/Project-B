import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from "./BannerImages/banner1.jpg";
import banner2 from "./BannerImages/banner2.jpg";
import banner3 from "./BannerImages/banner3.jpg";
import banner4 from "./BannerImages/banner4.jpg";
import banner5 from "./BannerImages/banner5.jpg";
import BannerButtons from './BannerButtons'; // Import the buttons component

const banners = [banner1, banner2, banner3, banner4, banner5];

function Banner() {
  const [index, setIndex] = useState(0);

  // Function to handle manual selection of slide
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="banner-container">
      {/* Image Slider */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={2000} // 3 seconds for automatic slide change
        pause="hover"  // Pause carousel when hovered
      >
        {banners.map((banner, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={banner} alt={`Slide ${idx + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Dots Component */}
      <BannerButtons index={index} handleSelect={handleSelect} />
    </div>
  );
}

export default Banner;
