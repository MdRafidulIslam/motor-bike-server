import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";

import useAuth from "./../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signinWithGoogle, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const { signInUsingGoogle } = useAuth();

  const handleOnChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signinWithGoogle(location, history);
  };
  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 w-50 mx-5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleOnChange}
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
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <br />
        <NavLink to="/register">
          <Button variant="primary" type="submit">
            new user : please registration
          </Button>
        </NavLink>
        {isLoading && <Spinner animation="border" />}
        {user?.email && (
          <Alert severity="success">user created successfully</Alert>
        )}

        {authError && <Alert severity="error">{authError}</Alert>}
      </Form>
      <p>-------------</p>
      <Button onClick={handleGoogleSignIn} variant="primary" type="submit">
        google signin
      </Button>
      <br />
      <br />
      <br />
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle} className="btn btn-success">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
