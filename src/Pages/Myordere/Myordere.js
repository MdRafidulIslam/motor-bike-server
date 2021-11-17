import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Myordere = () => {
  /*const { ordersId } = useParams();
  const [order, setOrder] = useState({});*/
  /*
  useEffect(() => {
    fetch(`https://macabre-goblin-34330.herokuapp.com/orders/${ordersId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  */
  return (
    <div>
      <h2>this is my orders</h2>
    </div>
  );
};

export default Myordere;
