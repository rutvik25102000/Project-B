import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsClock, BsPeople } from "react-icons/bs"; // Bootstrap icons
import images1 from "../../assets/menucardimages/Chicken Korma with Rumali Roti + 1 Gulab Jamun 500x500.png";

const foodItems = [
  {
    id: 1,
    name: "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    description: "Rich and creamy Dal Makhani served with soft Rumali Rotis and a delicious Gulab Jamun.",
    price: 299,
    orders: 507,
    image: images1,
    veg: true,
    prepTime: "25 min",
    serves: "2-3",
  },
  {
    id: 2,
    name: "Paneer Nawabi [500 gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    description: "Delightful Nawabi-style Paneer paired with Rumali Rotis and a sweet treat.",
    price: 329,
    orders: 509,
    image: images1,
    veg: true,
    prepTime: "30 min",
    serves: "3-4",
  },
  {
    id: 3,
    name: "Chicken Korma [500 gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    description: "Succulent Chicken Korma cooked in rich spices, served with fresh Rumali Rotis.",
    price: 349,
    orders: 524,
    image: images1,
    veg: false,
    prepTime: "35 min",
    serves: "3",
  },
  {
    id: 4,
    name: "Dum Ka Keema Gosht [350 gms] + 2 Ulte Tawa Ka Paratha + [1pc] Gulab Jamun",
    description: "Delicious Dum Ka Keema Gosht with Paratha and a sweet ending.",
    price: 449,
    orders: 502,
    image: images1,
    veg: false,
    prepTime: "40 min",
    serves: "2-3",
  },
];

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = foodItems.find((food) => food.id === parseInt(id));

  if (!item)
    return <h2 className="text-center text-danger mt-5">Food item not found!</h2>;

  return (
    <Container className="mt-5 mb-5">
    
  <Col md={6} lg={10}>
    <Row className="g-0">
      {/* Left Side - Image */}
      <Col md={6} className="d-flex flex-column align-items-center justify-content-center p-3">
        <Card.Img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="img-fluid rounded"
          style={{ width: '80%', height: '15rem', objectFit: 'cover' }}
        />
        
        {/* Order Stats */}
        <Row className="mt-3 text-muted">
          <Col className="d-flex align-items-center">
            <BsClock className="me-2" /> {item.prepTime} preparation
          </Col>
          <Col className="d-flex align-items-center">
            <BsPeople className="me-2" /> {item.orders}+ Orders
          </Col>
          <Col className="d-flex align-items-center">
            🍽️ Serves {item.serves}
          </Col>
        </Row>
      </Col>

      {/* Right Side - Details */}
      <Col md={6} className="p-4">
        <Card.Body>
          <div className="d-flex align-items-center mb-2">
            <span
              className={`me-2 rounded-circle ${item.veg ? "bg-success" : "bg-danger"}`}
              style={{ width: "10px", height: "10px" }}
            ></span>
            <Card.Title className="fw-bold mb-0">{item.name}</Card.Title>
          </div>
          <h4 className="text-dark fw-semibold">₹{item.price}</h4>
          <Card.Text className="text-muted">{item.description}</Card.Text>

          {/* Action Button */}
          <Button variant="warning" className="mt-4 w-50 fw-bold">
            Add +
          </Button>
        </Card.Body>
      </Col>
    </Row>
  </Col>


    </Container>
  );
};

export default FoodDetails;
