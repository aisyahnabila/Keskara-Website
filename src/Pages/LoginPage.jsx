import React from "react";
import "../assets/css/login.css";

const login = () => {
  return (
    <div className="container-fluid">
      <form className="mx-auto ">
        <h4 className="text-center">Login</h4>
        <div className="mb-3 mt-4">
          <label htmlFor="InputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleinputemail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {" "}
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
