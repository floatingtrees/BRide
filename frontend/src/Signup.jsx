import React, { useState } from 'react';
import Navbar from "./components/Navbar";

function SignUpPage() {

  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  function ConfirmPasswords() {
    const same = (confirmPassword === password);
    if(confirmPassword.length === 0) return;
    if(!same) {
        return (<h1>The passwords are not the same!</h1>);
    }
    else {
        return (null);
    }
  }
  function validateCredentials(email, password) {
    
  }
  return (
  <>
    <Navbar />

    <div className="login-credentials">
      <form className="email">
        {" "}
        <label>
          New Email:{" "}
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
          New Password:{" "}
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>{" "}
      </form>
      <form className="email">
        {" "}
        <label>
          Confirm New Password:{" "}
          <input
            type="text"
            name="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>{" "}
      </form>
    </div>
    <ConfirmPasswords />
    <h1>Sign Up to create an account!</h1>
    <div className="sign-in-button">
      <button onClick={validateCredentials}>Sign Up!</button>
    </div>
  </>
  )
}

export default SignUpPage;
