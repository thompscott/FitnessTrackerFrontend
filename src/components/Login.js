import React from "react";
import { useState } from "react";
import { userLogin } from "../api";
function Login( props ) {
  const [token, setToken] = [props.token, props.setToken];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const result = await userLogin(username, password);
    setMessage(result.message);
    if (result.token) {
      setToken(result.token);
      localStorage.setItem("token", result.token);
    }
  };

  return (
    <div>
      <form className="login" onSubmit={SubmitHandler}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default Login;
