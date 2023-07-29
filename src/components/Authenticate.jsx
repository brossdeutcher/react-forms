import { useState } from "react";


const Authenticate = ({token}) => {

  const [successMsg, setSuccessMsg] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);

  const authToken = async () => {
    
    try {
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        }
      });
      const result = await response.json();
      setUsername(result.data.username);
      setSuccessMsg(result.message);
      setError(null); // error message removed if authentication completes without errors
    } catch (err) {
      console.error(`Error in Authenticate: ${err}`);
      setError(err.message);
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {successMsg && <p>Great Success!! {successMsg}</p>}
      {username && <p>Signed in as: {username}</p>}
      {error && <p className="error">ERROR: {error}</p>}
      <button onClick={authToken}>Authenticate Token</button>
    </>
  )
}

export default Authenticate