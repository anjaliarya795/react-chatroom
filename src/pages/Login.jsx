import React from "react";
import { Link } from "react-router-dom";


const Login = () => {

  const handleSubmit = () => {
    //
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatroom</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? <Link to="">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;