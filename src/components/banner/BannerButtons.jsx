import React from 'react';
import './Banner.css';

const banners = new Array(5).fill(null); // Just to map dots, as images are in Banner.js

function BannerButtons({ index, handleSelect }) {
  return (
    <div className="custom-dots">
      {banners.map((_, idx) => (
        <button 
          key={idx} 
          className={`dot ${idx === index ? 'active' : ''}`} 
          onClick={() => handleSelect(idx)}
        />
      ))}
    </div>
  );
}

export default BannerButtons;
