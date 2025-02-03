import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routes from "../Routes/AllROutes";

function Layot() {
  return (
    <>
    <div className='container-fluid'>
    <Header />
    <Routes/>
    <Footer/>
    </div>
    </>
  );
}

export default Layot;
