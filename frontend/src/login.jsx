import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'




function App() {
  const [count, setCount] = useState(0)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function validateCredentials(username, password) {

  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="login-credentials"> 
      <form className="email"> <label> Email: <input type="text" name="name" /> </label>  </form>
      <form className="email"> <label> Password: <input type="text" name="name" /> </label>  </form>
      </div>
      <h1>Log in to book a ride</h1>
      <div className="sign-in-button">
        <button onClick={validateCredentials}>
          Sign In
        </button>
      </div>
      <p className="sign-up">
        Don't have an account? <a href="https://orteil.dashnet.org/cookieclicker/"> Sign up</a>
      </p>
    </>
  )
}

export default App
