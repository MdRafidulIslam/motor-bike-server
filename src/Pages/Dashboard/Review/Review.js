import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const [error, setError] = useState(false);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(false);

    data.reviewerEmail = user?.email;
    if (
      data.name === "" ||
      data.photo === "" ||
      data.description === "" ||
      data.rating === 0 ||
      data.rating === null
    ) {
      setError(true);
      return;
    }
    axios
      .post("https://macabre-goblin-34330.herokuapp.com/reviews", data)
      .then((res) => {
        /*
      if (res.data.insertedId) {
      }
      */
        console.log(res.data);
      });

    reset();
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div style={{ width: "48rem" }}>
          <div className="form-container">
            <h2
              style={{
                fontWeight: "bold",
                letterSpacing: "1px",
                textAlign: "center",
                margin: "8px 0",
                borderBottom: "2px solid #15c7e7",
                width: "max-content",
              }}
            >
              Give Review
            </h2>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "felx", flexDirection: "column" }}
            >
              <div style={{ margin: "10px 0" }}>
                <input
                  {...register("name")}
                  // defaultValue={user?.displayName}
                  placeholder="Your Name"
                />
              </div>

              <div style={{ margin: "10px 0" }}>
                <input
                  {...register("photo")}
                  type="url"
                  placeholder="Your Photo URL"
                />
              </div>
              <textarea
                {...register("description")}
                type="text"
                placeholder="Enter description"
                rows={3}
                cols={30}
              />
              {error && (
                <p style={{ color: "red", letterSpacing: "2px" }}>
                  please fill all fields
                </p>
              )}

              <input
                {...register("rating")}
                // defaultValue={user?.displayName}
                type="number"
                placeholder="Rating"
              />
              <input type="submit" value="SUBMIT" className="submit-btn" />

              {/* <input type="submit" value="SUBMIT" className="review-btn" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
