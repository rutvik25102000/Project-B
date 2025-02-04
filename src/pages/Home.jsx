import React from 'react';
import Banner from '../components/banner/Banner';
import Offers from '../components/OfferSider/OfferSlider';
import Categories from '../components/Categories/Categories';
import ContentCards from '../components/FoodCards/menuCards';



function Home() {
  return (
    <>
      <Banner />
      <Offers />
      <Categories />
      <ContentCards/>
    </>
  );
}

export default Home;
