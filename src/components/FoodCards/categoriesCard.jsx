import React, { useRef, useState, useEffect } from 'react';
import './categoriesCard.css'; // Import the CSS file for styling

const CategoryCards = ({ categories }) => {
  const sliderRef = useRef(null);
  const [hideLeft, setHideLeft] = useState(true);
  const [hideRight, setHideRight] = useState(false);
  const cardWidth = 250; // Adjust according to your card width

  // Update visibility of navigation buttons based on scroll position
  const updateButtonVisibility = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setHideLeft(scrollLeft <= 0);
      setHideRight(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Scroll to the previous item
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setTimeout(updateButtonVisibility, 300); // Update visibility after scroll
    }
  };

  // Scroll to the next item
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      setTimeout(updateButtonVisibility, 300); // Update visibility after scroll
    }
  };

  // Update button visibility when the component mounts or when the user scrolls
  useEffect(() => {
    updateButtonVisibility();
    window.addEventListener('resize', updateButtonVisibility); // Handle window resize
    return () => window.removeEventListener('resize', updateButtonVisibility); // Cleanup
  }, []);

  return (
    <div className="categoryCard_categoryCard_wrapper">
      {/* Left Slider Button */}
      {!hideLeft && (
        <button className="slider-button prev" onClick={scrollLeft}>{`<`}</button>
      )}

      <div className="slider-container" ref={sliderRef} onScroll={updateButtonVisibility}>
        <div className="category-cards">
          {categories.map((category, index) => (
            <div key={index} className="categoryCard_categoryCard">
              <div className="categoryCard_categoryCard_circle">
                <img
                  alt={category.title}
                  loading="lazy"
                  width="100"
                  height="100"
                  className="categoryCard_categoryCard_circle_img"
                  src={category.image}
                  style={{ color: 'transparent' }}
                />
              </div>
              <p className="categoryCard_categoryCard_label">{category.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Slider Button */}
      {!hideRight && (
        <button className="slider-button next" onClick={scrollRight}>{`>`}</button>
      )}
    </div>
  );
};

export default CategoryCards;
