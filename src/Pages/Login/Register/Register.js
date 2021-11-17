import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password did not matched");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div>
      {!isLoading && (
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3 w-50 mx-5" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="username"
              onBlur={handleOnBlur}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50 mx-5" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onBlur={handleOnBlur}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 w-50 mx-5" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onBlur={handleOnBlur}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50 mx-5" controlId="formBasicPassword">
            <Form.Label>confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="password2"
              placeholder="Password"
              onBlur={handleOnBlur}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <br />
          <NavLink to="/login">
            <Button variant="primary" type="submit">
              Already Registered : please Login
            </Button>
          </NavLink>
        </Form>
      )}
      {isLoading && <Spinner animation="border" />}
      {user?.email && (
        <Alert severity="success">user created successfully</Alert>
      )}

      {authError && <Alert severity="error">{authError}</Alert>}
    </div>
  );
};

export default Register;
