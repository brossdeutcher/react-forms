import { useState } from "react";


const Authenticate = ({token}) => {

  const [successMsg, setSuccessMsg] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);

  const authToken = async () => {
    console.log(token);
    
    try {
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        }
      });
      // throw Error(`OH SHIIIIT`);
      const result = await response.json();
      setUsername(result.data.username);
      setSuccessMsg(result.message);
  } catch (err) {
    console.error(`My Error Msg: ${err}`);
    setError(err);
  }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {successMsg && <p>Great Success!! {successMsg}</p>}
      {username && <p>Signed in as: {username}</p>}
      {error && <p>ERROR: {error}</p>}
      <button onClick={authToken}>Authenticate Token</button>
    </>
  )
}

export default Authenticate