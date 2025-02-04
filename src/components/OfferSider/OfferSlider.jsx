// import React, { useState, useRef, useEffect } from 'react';
// import './OfferSlider.css';
// import OfferpercentageIcon from './offerpercentage.svg';

// const OffersSlider = () => {
//   const offers = [
//     { title: 'Flat 20% OFF on Biryani Combos', subTitle: 'Flat 20% OFF on Biryani Combos Items' },
//     { title: 'FLAT 25% OFF on Take Away Orders', subTitle: 'No minimum order amount.' },
//     { title: 'Rs 175 OFF on FIRST ORDER', subTitle: 'on min. order amount of Rs 699' },
//     { title: 'Flat Rs. 120 OFF', subTitle: 'on min. subtotal of Rs 399 & above (excluding GST)' },
//     { title: 'Flat Rs. 150 OFF', subTitle: 'on min. subtotal of Rs 749 & above (excluding GST)' },
//     { title: 'Flat Rs 250 OFF', subTitle: 'on min. order amount of Rs 1499 and above.' },
//     { title: 'Bulk Order? Flat 15% off', subTitle: 'Get Flat 15% off on orders above Rs 2500' },
//   ];

//   const sliderRef = useRef(null);
//   const [hideLeft, setHideLeft] = useState(true);
//   const [hideRight, setHideRight] = useState(false);
//   const cardWidth = 300; // Fixed card width + spacing

//   useEffect(() => {
//     updateButtonVisibility();
//   }, []);

//   const updateButtonVisibility = () => {
//     if (sliderRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
//       setHideLeft(scrollLeft <= 0);
//       setHideRight(scrollLeft + clientWidth >= scrollWidth);
//     }
//   };

//   const nextSlide = () => {
//     if (sliderRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
//       const maxScroll = scrollWidth - clientWidth;
      
//       let newScrollLeft = Math.min(scrollLeft + cardWidth, maxScroll);
//       sliderRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });

//       setTimeout(updateButtonVisibility, 500); // Ensure state updates after smooth scroll
//     }
//   };

//   const prevSlide = () => {
//     if (sliderRef.current) {
//       let newScrollLeft = Math.max(sliderRef.current.scrollLeft - cardWidth, 0);
//       sliderRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });

//       setTimeout(updateButtonVisibility, 500);
//     }
//   };

//   return (
//     <div className='container mb-4'>
//       {/* <h3 className="text-start mt-4 offer-heading">Offers</h3> */}
//       <h3 className="text-start mt-4 offer-heading text-uppercase fw-bold" style={{ color: 'black', marginBottom: '15px', position: 'relative', display: 'inline-block' }}>
//         Offers
//         <span className="d-block" style={{ width: '50px', height: '4px', backgroundColor: '#ffb600', marginTop: '5px', borderRadius: '2px' }}></span>
//       </h3>
//       <div className="offer-slider">
//         {!hideLeft && (
//           <button className="caret caret-left" onClick={prevSlide}>{`<`}</button>
//         )}

//         <div className="slider-container" ref={sliderRef} onScroll={updateButtonVisibility}>
//           <div className="slider-content">
//             {offers.map((offer, index) => (
//               <div key={index} className={`offer-card ${index % 2 === 0 ? 'odd' : 'even'}`}>
//                 <img src={OfferpercentageIcon} alt="percentage" className="offer-icon" />
//                 <div className="offer-text">
//                   <p className="offer-title">{offer.title}</p>
//                   <p className="offer-subtitle">{offer.subTitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {!hideRight && (
//           <button className="caret caret-right" onClick={nextSlide}>{`>`}</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OffersSlider;


import React, { useState, useRef, useEffect } from 'react';
import './OfferSlider.css';
import OfferpercentageIcon from './offerpercentage.svg';
import OfferModal from "./offermodel"

const OffersSlider = () => {
  const offers = [
    { title: 'Flat 20% OFF on Biryani Combos', subTitle: 'Flat 20% OFF on Biryani Combos Items' },
    { title: 'FLAT 25% OFF on Take Away Orders', subTitle: 'No minimum order amount.' },
    { title: 'Rs 175 OFF on FIRST ORDER', subTitle: 'on min. order amount of Rs 699' },
    { title: 'Flat Rs. 120 OFF', subTitle: 'on min. subtotal of Rs 399 & above (excluding GST)' },
    { title: 'Flat Rs. 150 OFF', subTitle: 'on min. subtotal of Rs 749 & above (excluding GST)' },
    { title: 'Flat Rs 250 OFF', subTitle: 'on min. order amount of Rs 1499 and above.' },
    { title: 'Bulk Order? Flat 15% off', subTitle: 'Get Flat 15% off on orders above Rs 2500' },
  ];

  const sliderRef = useRef(null);
  const [hideLeft, setHideLeft] = useState(true);
  const [hideRight, setHideRight] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const cardWidth = 300; // Fixed card width + spacing

  useEffect(() => {
    updateButtonVisibility();
  }, []);

  const updateButtonVisibility = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setHideLeft(scrollLeft <= 0);
      setHideRight(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      let newScrollLeft = Math.min(scrollLeft + cardWidth, maxScroll);
      sliderRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });

      setTimeout(updateButtonVisibility, 500); // Ensure state updates after smooth scroll
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      let newScrollLeft = Math.max(sliderRef.current.scrollLeft - cardWidth, 0);
      sliderRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });

      setTimeout(updateButtonVisibility, 500);
    }
  };

  const handleOfferClick = (offer) => {
    setSelectedOffer(offer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOffer(null);
  };

  return (
    <div className='container mb-4'>
      <h3 className="text-start mt-4 offer-heading text-uppercase fw-bold" style={{ color: 'black', marginBottom: '15px', position: 'relative', display: 'inline-block' }}>
        Offers
        <span className="d-block" style={{ width: '50px', height: '4px', backgroundColor: '#ffb600', marginTop: '5px', borderRadius: '2px' }}></span>
      </h3>
      <div className="offer-slider">
        {!hideLeft && (
          <button className="caret caret-left" onClick={prevSlide}>{`<`}</button>
        )}

        <div className="slider-container" ref={sliderRef} onScroll={updateButtonVisibility}>
          <div className="slider-content">
            {offers.map((offer, index) => (
              <div key={index} className={`offer-card ${index % 2 === 0 ? 'odd' : 'even'}`} onClick={() => handleOfferClick(offer)}>
                <img src={OfferpercentageIcon} alt="percentage" className="offer-icon" />
                <div className="offer-text">
                  <p className="offer-title">{offer.title}</p>
                  <p className="offer-subtitle">{offer.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!hideRight && (
          <button className="caret caret-right" onClick={nextSlide}>{`>`}</button>
        )}
      </div>
      <OfferModal showModal={showModal} handleCloseModal={handleCloseModal} selectedOffer={selectedOffer} />
   

    
    </div>
  );
};

export default OffersSlider;
