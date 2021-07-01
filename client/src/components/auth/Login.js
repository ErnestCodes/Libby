import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SUCCESS");
  };

  return (
    <Fragment>
      <div class="alert alert-danger">Invalid credentials</div>
      <h1 class="large text-color">Sign In</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Sign into Your Account
      </p>
      <form class="form" action="dashboard.html">
        <div class="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => handleOnChange(e)}
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handleOnChange(e)}
            name="password"
          />
        </div>
        <input type="submit" class="btn btn-color" value="Login" />
      </form>
      <p class="my-1">
        Don't have an account?{" "}
        <Link to="/register" className="text-color">
          Sign Up
        </Link>
      </p>
    </Fragment>
  );
}

export default Login;
