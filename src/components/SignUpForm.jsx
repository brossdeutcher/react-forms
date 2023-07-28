import { useState } from "react";

const SignUpForm = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const changeUsername = (e) => {
    setUsername(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Username: <input value={username} onChange={changeUsername} /></label>
        <label>Password: <input value={password} onChange={changePassword} /></label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm;