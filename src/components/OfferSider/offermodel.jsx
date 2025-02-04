import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OfferModal = ({ showModal, handleCloseModal, selectedOffer }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
      <Modal.Header closeButton className="border-bottom-0">
        <Modal.Title className="h3 text-primary fw-bold">
          {selectedOffer?.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="py-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <p className="lead text-muted mb-4">{selectedOffer?.subTitle}</p>

              {selectedOffer?.description && (
                <div className="mb-4">
                  <h5 className="text-secondary mb-3">Offer Details</h5>
                  <p className="text-dark">{selectedOffer.description}</p>
                </div>
              )}

              {selectedOffer?.terms && (
                <div className="bg-light p-3 rounded mb-4">
                  <h6 className="text-uppercase text-secondary small mb-3">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    Terms & Conditions
                  </h6>
                  <ul className="list-unstyled small text-muted mb-0">
                    {selectedOffer.terms.split(';').map((term, index) => (
                      <li key={index} className="d-flex mb-1">
                        <i className="fas fa-circle me-2 small text-primary" style={{ fontSize: '6px', marginTop: '6px' }}></i>
                        {term.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedOffer?.code && (
                <div className="alert alert-success mb-4">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <small className="text-uppercase text-muted d-block">Promo Code</small>
                      <code className="h5 mb-0 d-block text-dark">{selectedOffer.code}</code>
                    </div>
                    <button className="btn btn-outline-success">
                      <i className="far fa-copy"></i> Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-top-0">
        <Button
          variant="primary"
          onClick={handleCloseModal}
          className="rounded-pill px-4"
        >
          Close Offer Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OfferModal;
