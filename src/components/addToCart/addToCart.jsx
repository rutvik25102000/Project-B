import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, InputGroup, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartModal = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity
    });
    handleClose();
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={product.imageUrl || 'https://via.placeholder.com/150'} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
            <br />
            <strong>Price: ${product.price}</strong>
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <img 
                src={product.imageUrl || 'https://via.placeholder.com/150'} 
                alt={product.name} 
                className="img-fluid"
              />
            </Col>
            <Col md={8}>
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity:</Form.Label>
                <InputGroup>
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => handleQuantityChange(quantity - 1)}
                  >
                    -
                  </Button>
                  <Form.Control 
                    type="number" 
                    value={quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                    style={{ textAlign: 'center' }}
                  />
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </Button>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CartModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default CartModal;