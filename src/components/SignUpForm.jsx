import { useState } from "react";

const SignUpForm = ({setToken}) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const changeUsername = (e) => {
    setUsername(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
      });
      const result = await response.json();
      setToken(result.token);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username: <input value={username} onChange={changeUsername} /></label>
        <label>Password: <input value={password} onChange={changePassword} /></label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm;