import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import image1 from "../../assets/CategoriesImages/WhatsApp Image 2023-12-20 at 5.06.19 PM (2).jpeg";
import image2 from "../../assets/CategoriesImages/Everyday Biryani Combos (1).png";
import image3 from "../../assets/CategoriesImages/gbc-bbk-colab.jpg";
import image4 from "../../assets/CategoriesImages/kolkata-cat-img.jpg";
import image5 from "../../assets/CategoriesImages/lucknowi-ndd.jpg";
import image6 from "../../assets/CategoriesImages/paneer-nawabi.jpg";

const MenuSlider = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { name: 'Veg', type: 'veg' },
    { name: 'Non-Veg', type: 'non-veg' },
    { name: 'Best Seller', type: 'best-seller' }
  ];
  const menuItems = [
    { title: 'Lunch Combos starting @299', image: image1 },
    { title: 'Hyderabadi Biryani', image: image2 },
    { title: 'Lucknowi Biryani', image: image3 },
    { title: 'Kolkata Biryani', image: image4 },
    { title: 'Everyday Biryani Combos', image: image5 },
    { title: 'Biryani by Chef Saransh Goila', image: image6 }
];

  return (

    <div className="menu-container ">
      <h3 className="categories-title">Categories</h3>
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
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.image} alt={item.title} className="menu-image" />
            <p className="menu-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSlider;
