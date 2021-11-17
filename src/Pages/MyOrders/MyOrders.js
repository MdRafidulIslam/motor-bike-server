import React, { useEffect, useState } from "react";

import "./MyOrders.css";

const MyOrders = () => {
  /*
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("https://macabre-goblin-34330.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        console.log(data);
      });
  }, []);
  console.log(order);
  */
  return (
    <div id="services">
      <h2>This is my order</h2>
    </div>
  );
};

export default MyOrders;
