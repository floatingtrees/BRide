import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(false);

  function validateCredentials(email, password) {
    //basically check the login credentials with the database
    const valid = true;
    setValid(valid);
  }
  function LoginRedirection() {
  }

  return (
    <>
      <Navbar />
      <div className="login-credentials">
        <form className="email">
          {" "}
          <label>
            Email:{" "}
            <input
              type="text"
              name="name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>{" "}
        </form>
        <form className="email">
          {" "}
          <label>
            Password:{" "}
            <input
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>{" "}
        </form>
      </div>
      <h1>Log in to book a ride</h1>
      <div className="sign-in-button">
        <button onClick={validateCredentials}>
          Log In
        </button>
      </div>
      <p className="sign-up">
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
}

export default LoginPage;
