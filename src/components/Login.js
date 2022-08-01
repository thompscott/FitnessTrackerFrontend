import React from 'react'
import { useState } from "react"
import { userLogin } from '../api';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const SubmitHandler = async (e) => {
            e.preventDefault()
            const result = await userLogin(username, password)
            setMessage(result.message);
            console.log(result)
        
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
                        console.log(username);
                    }} />
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        console.log(password);
                    }} />
                <button type="submit">Login</button>
                <p>{message}</p>
            </form>
        </div>
    )
}

export default Login

