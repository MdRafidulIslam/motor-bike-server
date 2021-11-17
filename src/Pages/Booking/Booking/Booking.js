import React, { useEffect, useState } from "react";
import "./Booking.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Booking = (ord) => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const { _id } = ord;
  console.log(ord);

  useEffect(() => {
    fetch(`https://macabre-goblin-34330.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    data.product = service;
    axios
      .post("https://macabre-goblin-34330.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Add order succcessfully");
          reset();
        }
      });
  };

  return (
    <div>
      <img src={service.img} alt="" className="w-25 mt-2" />
      <h1>{service.Name}</h1>
      <h2>ticket booking no: {serviceId}</h2>
      <h3>ticket price : {service.price}</h3>

      <div>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("Name", { required: true, maxLength: 20 })}
            placeholder={user.displayName}
          />

          <input
            {...register("email", { required: true })}
            placeholder={user.email}
          />

          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />
          <input placeholder="City" defaultValue="" {...register("city")} />
          <input
            placeholder="phone number"
            defaultValue=""
            {...register("phone")}
          />
          <Link to={`/orders/${_id}`}>
            <input type="submit" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Booking;
