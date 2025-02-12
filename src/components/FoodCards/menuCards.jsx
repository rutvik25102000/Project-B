
import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import images1 from '../../assets/menucardimages/Chicken Korma with Rumali Roti + 1 Gulab Jamun 500x500.png';

const foodItems = [
  {
    id: 1,
    name: "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    description: "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    price: 299,
    orders: 507,
    image: images1,
    veg: true,
  },
  {
    id: 2,
    name: "Paneer Nawabi [500 gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    description: "Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    price: 329,
    orders: 509,
    image: images1,
    veg: true,
  },
  {
    id: 3,
    name: "Chicken Korma [500 gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    description: "Chicken Korma [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    price: 349,
    orders: 524,
    image: images1,
    veg: false,
  },
  {
    id: 4,
    name: "Dum Ka Keema Gosht [350 gms] + 2 Ulte Tawa Ka Paratha + [1pc] Gulab Jamun",
    description:
      "Dum Ka Keema Gosht [350gms] + 2 Ulte Tawa Ka Paratha + [1pc] Gulab Jamun",
    price: 449,
    orders: 502,
    image: images1,
    veg: false,
  },
];

const FoodCard = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <Container className="mt-4">
      <h3 className="text-start mt-2 offer-heading text-uppercase fw-bold" style={{ color: 'black', marginBottom: '15px' }}>
        Lunch Combos starting @299
        <span className="d-block" style={{ width: '50px', height: '4px', backgroundColor: '#ffb600', marginTop: '5px', borderRadius: '2px' }}></span>
      </h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {foodItems.map((item) => (
          <div key={item.id} className="col" onClick={() => handleClick(item.id)} style={{ cursor: "pointer" }}>
            <Card className="shadow-sm border-0 rounded-3">
              <Card.Img variant="top" src={item.image} className="card-img-top" style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <span className="rounded-circle me-2" style={{ width: "12px", height: "12px", backgroundColor: item.veg ? "green" : "red" }}></span>
                  <Card.Title className="mb-0" style={{ fontSize: "16px" }}>
                    <strong>{item.name}</strong>
                  </Card.Title>
                </div>
                <Card.Text className="fs-6">{item.description}</Card.Text>
                <p className="text-muted fs-7">📌 {item.orders} People ordered last week</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">₹{item.price}</h5>
                  <Button variant="warning" className="fw-bold px-4 py-2 rounded-3">Add +</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FoodCard;
