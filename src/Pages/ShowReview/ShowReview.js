import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Rating from "../Rating/Rating";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://macabre-goblin-34330.herokuapp.com/reviews")
      .then((res) => setReviews(res.data));
  }, []);
  return (
    <div>
      <h1 style={{ color: "#11D99D" }} className="fs-1 mt-5">
        Customer Ratings
      </h1>
      <Row xs={1} md={3} className="g-4">
        {reviews.map((review) => (
          <Rating key={review._id} review={review}></Rating>
        ))}
      </Row>
    </div>
  );
};

export default ShowReview;
