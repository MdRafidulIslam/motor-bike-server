import React, { useEffect, useState } from "react";
import "./Explores.css";
import Explore from "../Explore/Explore";
import Service from "../Service/Service";

const Explores = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://macabre-goblin-34330.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services">
      <h2 className="text-dark mt-5">Motor Bike services</h2>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Explores;
