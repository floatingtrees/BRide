import React, { useState } from "react";
import Navbar from "./components/Navbar";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateCredentials(email, password) {}

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
        <button onClick={validateCredentials}>Log In</button>
      </div>
      <p className="sign-up">
        Don't have an account?{" "}
        <a href="https://orteil.dashnet.org/cookieclicker/"> Sign up</a>
      </p>
    </>
  );
}

export default LoginPage;
