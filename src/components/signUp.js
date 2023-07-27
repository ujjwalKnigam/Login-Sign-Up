import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../basicConfig";
import Login from "./login";

const SignUp = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  const handleClick = () => {
    axios.get(baseURL + "/login").then((res) => {
      setSignedIn(res.data);
    });
  };
  const handleLogin = () => {
    setSignedIn(true);
  };

  return (
    <div>
      <div
        className="form-signin w-100 m-auto"
        style={{ display: isSignedIn ? "none" : "block" }}
      >
        <h1 className="login_form">Sign-Up Form</h1>
        <br></br>
        <form action="http://localhost:5000/submit" method="post">
          <div className="form-floating">
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="floatingName"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingName">First Name</label>
          </div>
          <br></br>
          <div className="form-floating">
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="floatingLastName"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingLastName">Last Name</label>
          </div>
          <br></br>
          <div className="form-floating">
            <input
              type="date"
              name="DOB"
              className="form-control"
              id="floatingName"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingName">DOB</label>
          </div>
          <br></br>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <br></br>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button
            onClick={handleClick}
            className="btn btn-primary w-100 py-2"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleLogin}
          className="btn btn-primary w-100 py-2 mt-3"
        >
          Login
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
      <div style={{ display: isSignedIn ? "block" : "none" }}>
        <Login />
      </div>
    </div>
  );
};

export default SignUp;
