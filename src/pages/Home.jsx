import React from 'react';
import Banner from '../components/banner/Banner';
import Offers from '../components/OfferSider/OfferSlider';
import Categories from '../components/Categories/Categories';



function Home() {
  return (
    <div>
      <Banner />
      <div className='container'>
      <Offers />
      <Categories />
      </div>
    </div>
  );
}

export default Home;
