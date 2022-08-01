import React from "react";
import { useState } from "react";
import { userRegistration } from "../api";
function Register( props ) {
  const [token, setToken] = [props.token, props.setToken];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const result = await userRegistration(username, password);
    setMessage(result.message);
    if (result.token) {
      setToken(result.token);
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", username);
    }
  };
  return (
    (token ? (<div>
      <h2>Register</h2>
      <h3>Logged in as {username}</h3>
      <button
      onClick={() =>{
          localStorage.removeItem("token");
          setToken("");
      }}>Log Out</button>
  </div>): (
    <div>
    <form className="register" onSubmit={SubmitHandler}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  </div>
  ))
    
  );
}
export default Register;
