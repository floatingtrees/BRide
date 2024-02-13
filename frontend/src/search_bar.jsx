import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
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
      <h1>Log in to book a ride</h1>
      <div className="card">
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
