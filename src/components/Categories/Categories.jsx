import React, { useState } from 'react';
import './styles.css';  // Add the relevant styles for your MenuSlider.
import CategoryCards from '../FoodCards/categoriesCard';

const MenuSlider = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { name: 'Veg', type: 'veg' },
    { name: 'Non-Veg', type: 'non-veg' },
    { name: 'Best Seller', type: 'best-seller' }
  ];

  const menuItems = [
    { title: 'Lunch Combos starting @299', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/lunch-combo-299-final.jpg' },
    { title: 'Hyderabadi Biryani', type: 'non-veg', image: 'https://mis.rezolpos.in/images/catimg/WhatsApp%20Image%202023-12-20%20at%203.30.01%20PM.jpeg' },
    { title: 'Lucknowi Biryani', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/lucknowi-ndd.jpg' },
    { title: 'Kolkata Biryani', type: 'non-veg', image: 'https://mis.rezolpos.in/images/catimg/kolkata-cat-img.jpg' },
    { title: 'Everyday Biryani Combos', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/Everyday%20Biryani%20Combos%20(1).png' },
    { title: 'Biryani by Chef Saransh Goila', type: 'best-seller', image: 'https://mis.rezolpos.in/images/catimg/gbc-bbk-colab.jpg' },
    { title: 'Kebabs', type: 'non-veg', image: 'https://mis.rezolpos.in/images/catimg/ChickenGheeRoast%20(1).jpg' },
    { title: 'Korma and Curries', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/paneer-nawabi.jpg' },
    { title: 'Rolls', type: 'best-seller', image: 'https://mis.rezolpos.in/images/catimg/tikka_Listing.jpg' },
    { title: 'Breads & Extras', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/Rumali%20roti.jpg' },
    { title: 'Beverages', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/WhatsApp%20Image%202023-12-20%20at%205.06.19%20PM%20(2).jpeg' },
    { title: 'Everyday Biryani Combos', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/Everyday%20Biryani%20Combos%20(1).png' },
    { title: 'Biryani by Chef Saransh Goila', type: 'best-seller', image: 'https://mis.rezolpos.in/images/catimg/gbc-bbk-colab.jpg' },
    { title: 'Kebabs', type: 'non-veg', image: 'https://mis.rezolpos.in/images/catimg/ChickenGheeRoast%20(1).jpg' },
    { title: 'Korma and Curries', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/paneer-nawabi.jpg' },
    { title: 'Rolls', type: 'best-seller', image: 'https://mis.rezolpos.in/images/catimg/tikka_Listing.jpg' },
    { title: 'Breads & Extras', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/Rumali%20roti.jpg' },
    { title: 'Beverages', type: 'veg', image: 'https://mis.rezolpos.in/images/catimg/WhatsApp%20Image%202023-12-20%20at%205.06.19%20PM%20(2).jpeg' },
    { title: 'Desserts', type: 'best-seller', image: 'https://mis.rezolpos.in/images/catimg/Matka-Phirni-(best)%20(1)%20(1)%20(1)%20(1).jpeg' }
  ];

  const filteredMenuItems = menuItems.filter(item => item.type === categories[activeCategory].type);

  return (
    <div className="container">
      <h3 className="categories-title">Categories</h3>

      {/* Static categories section */}
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${category.type} ${activeCategory === index ? 'active' : ''}`}
            onClick={() => setActiveCategory(index)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Category Cards (Slider) */}
      <div className="slider-section">
        <CategoryCards categories={filteredMenuItems} />
      </div>
    </div>
  );
};

export default MenuSlider;
