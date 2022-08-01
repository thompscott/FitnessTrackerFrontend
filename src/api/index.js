import axios from 'axios';
import { useResolvedPath } from 'react-router-dom';

const url = "http://fitnesstrac-kr.herokuapp.com/api"

export const userRegistration = async (username, password) => {
    console.log("User and Password", username, password);
    console.log(`${url}/users/register`);
    const response = await fetch(`${url}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: username,
          password: password,
      }),
    });
    const result = await response.json();
    return result;
  };

export const userLogin = async (username, password) => {
  console.log(username, "username");
  console.log(password, "password");
    const response = await fetch(`${url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const result = await response.json();
    return result;
  };