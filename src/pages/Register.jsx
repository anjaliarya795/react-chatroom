import React from "react";
// import Add from "../img/add.png";

import {  Link } from "react-router-dom";

const Register = () => {

  const handleSubmit = () => {
    //
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatroom</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <h1>+</h1>
            <img src="./img/add.png" alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>
          {/* You do have an account? <Link to="">Login</Link> */}
        </p>
      </div>
    </div>
  );
};

export default Register;