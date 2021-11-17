import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [error, setError] = useState(false);
  const { admin } = useAuth();
  console.log(admin);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(false);
    if (data.email === "") {
      setError(true);
      return;
    }
    axios.put("http://localhost:5000/users", data).then((res) => {
      if (res.data.modifiedCount) {
        alert("admin added succesfully");
      }
    });
    reset();
  };
  // console.log(admin);
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
        <div style={{ width: "70%" }}>
          <div>
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
              Add Admin
            </h2>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "felx", flexDirection: "column" }}
            >
              <div style={{ margin: "10px 0" }}>
                <input
                  {...register("email")}
                  // defaultValue={user?.displayName}
                  placeholder="Enter Email"
                />
              </div>

              {error && (
                <p style={{ color: "red", letterSpacing: "2px" }}>
                  input field cannot be empty
                </p>
              )}

              <input type="submit" value="SUBMIT" />

              {/* <input type="submit" value="SUBMIT" className="review-btn" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
