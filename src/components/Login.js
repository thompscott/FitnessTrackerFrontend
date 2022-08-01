import React from "react";
import { useState } from "react";
import { userLogin } from "../api";
function Login( props ) {
  const [token, setToken, username, setUsername] = [props.token, props.setToken, props.username, props.setUsername];
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const result = await userLogin(username, password);
    setMessage(result.message);
    if (result.token) {
      setToken(result.token);
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", username);
    }
  };

  return (
    (token ? (
        <div>
            <h2>Login</h2>
            <h3>Logged in as {username}</h3>
            <button
            onClick={() =>{
                localStorage.removeItem("token");
                setToken("");
            }}>Log Out</button>
        </div>
    ):
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
    )
  );
}

export default Login;
