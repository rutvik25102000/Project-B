// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';

// const OfferModal = ({ showModal, handleCloseModal, selectedOffer }) => {
//   return (
//     <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
//       <Modal.Header closeButton className="border-bottom-0">
//         <Modal.Title className="h3 text-primary fw-bold">
//           {selectedOffer?.title}
//         </Modal.Title>
//       </Modal.Header>

//       <Modal.Body className="py-0">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12">
//               <p className="lead text-muted mb-4">{selectedOffer?.subTitle}</p>

//               {selectedOffer?.description && (
//                 <div className="mb-4">
//                   <h5 className="text-secondary mb-3">Offer Details</h5>
//                   <p className="text-dark">{selectedOffer.description}</p>
//                 </div>
//               )}

//               {selectedOffer?.terms && (
//                 <div className="bg-light p-3 rounded mb-4">
//                   <h6 className="text-uppercase text-secondary small mb-3">
//                     <i className="fas fa-exclamation-circle me-2"></i>
//                     Terms & Conditions
//                   </h6>
//                   <ul className="list-unstyled small text-muted mb-0">
//                     {selectedOffer.terms.split(';').map((term, index) => (
//                       <li key={index} className="d-flex mb-1">
//                         <i className="fas fa-circle me-2 small text-primary" style={{ fontSize: '6px', marginTop: '6px' }}></i>
//                         {term.trim()}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {selectedOffer?.code && (
//                 <div className="alert alert-success mb-4">
//                   <div className="d-flex align-items-center">
//                     <div className="flex-grow-1">
//                       <small className="text-uppercase text-muted d-block">Promo Code</small>
//                       <code className="h5 mb-0 d-block text-dark">{selectedOffer.code}</code>
//                     </div>
//                     <button className="btn btn-outline-success">
//                       <i className="far fa-copy"></i> Copy
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </Modal.Body>

//       <Modal.Footer className="border-top-0">
//         <Button
//           variant="primary"
//           onClick={handleCloseModal}
//           className="rounded-pill px-4"
//         >
//           Close Offer Details
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default OfferModal;



import React from "react";
import { Modal, Button } from "react-bootstrap";
import OfferImage from "../../assets/offerModel/offerModel.png"; // Ensure the image is imported correctly

const OfferModal = ({ showModal, handleCloseModal, selectedOffer }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Offer Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-start">
          <img
            src={OfferImage}
            alt="Offer"
            style={{ width: "100px", height: "100px", marginRight: "15px" }}
          />
          <div>
            <h5 className="fw-bold">{selectedOffer?.title}</h5>
            <p className="text-muted">{selectedOffer?.subTitle}</p>
          </div>
        </div>
        <p className="mt-3">
          Now get <strong>{selectedOffer?.title}</strong> on all Take Away Orders for website and APP
        </p>
        <h6 className="fw-bold mt-3">Terms and Conditions</h6>
        <ul className="text-muted small">
          <li>This Coupon code can be applied only once in 2 hours</li>
          <li>Offer Valid on BBK APP and website only</li>
          <li>This offer cannot be clubbed with any other offer.</li>
          <li>Offer not valid on combos or already discounted offer.</li>
          <li>Offer applicable on min. order amount of Rs 199 & above.</li>
          <li>Max discount Rs 3000 per order.</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OfferModal;
