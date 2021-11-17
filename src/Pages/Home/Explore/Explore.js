import React from "react";
import "./Explore.css";
import { Link } from "react-router-dom";

const Explore = ({ service }) => {
  const { _id, Name, price, description, img } = service;
  return (
    <div className="service pb-3">
      <img src={img} alt="" />
      <h2>{Name}</h2>
      <h4> Price: {price}</h4>
      <p className="px-3">{description}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-primary">Buy now {Name}</button>
      </Link>
    </div>
  );
};

export default Explore;
