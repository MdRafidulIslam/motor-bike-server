import React, { useEffect, useState } from "react";
import "./#ManageBikes.css";

const ManageBikes = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://macabre-goblin-34330.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://macabre-goblin-34330.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("delete");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h2 className="text-dark">This is Manage Order</h2>
      <br />
      <br />
      <div className="service-container">
        {services.map((service) => (
          <div className="manage">
            <div key={service._id}>
              <img src={service.img} className="w-25" alt="" />
              <h3>{service.Name}</h3>
              <h3>{service.price}</h3>
              <button
                className="bg-success"
                onClick={() => handleDelete(service._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBikes;
