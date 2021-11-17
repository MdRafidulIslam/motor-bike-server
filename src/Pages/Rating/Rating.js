import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";

const Ratings = ({ review }) => {
  const { name, reviewerEmail, photo, description, rating } = review;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title>Name : {name}</Card.Title>
            <Card.Title style={{ color: "#56D5C4" }}>
              Email : {reviewerEmail}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text style={{ color: "#56D994" }}>
              Rating no : {rating}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Ratings;
