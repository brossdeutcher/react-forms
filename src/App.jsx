import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {

  const [token, setToken] = useState(null);

  return (
    <>
      <h1>React Sign Forms</h1>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} />
    </>
  )
}

export default App
