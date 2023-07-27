import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../basicConfig";

const Login = () => {
  return (
    <div
      className="form-signin w-100 m-auto"
    >
      <h1 className="login_form">Login Form</h1>
      <br></br>
      <form action="http://localhost:5000/login" method="post">
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
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; {new Date().getFullYear()}
        </p>
      </form>
    </div>
  );
};

export default Login;
