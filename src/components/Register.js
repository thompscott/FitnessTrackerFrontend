import React from "react";
import { useState } from "react";
import { userRegistration } from "../api";
function Register(props) {
  const [token, setToken, username, setUsername] = [props.token, props.setToken, props.username, props.setUsername];
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
    (token ? (<div className="registerPage">
      <h2>Register</h2>
      <h3>Logged in as {username}</h3>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          setToken("");
        }}>Log Out</button>
    </div>) : (
      <div className="registerPage">
        <form className="register" onSubmit={SubmitHandler}>
          <h2>Register</h2>
          <fieldset>
            <label htmlFor='username'>Username</label>
            <input
              minLength={1}
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            /></fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              minLength={1}
              id="password"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            /></fieldset>
          <fieldset>
            <button type="submit">Register</button>
            <p>{message}</p>
          </fieldset>
        </form>
      </div>
    ))

  );
}
export default Register;
