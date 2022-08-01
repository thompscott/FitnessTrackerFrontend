import React from 'react'
import { useState } from "react"
import { userLogin } from '../api';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [Error, setError] = useState('')

    const SubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const result = await userLogin(username, password)
            console.log(result)
        } catch (error) {
            console.error(error)
            setError('Username and Password Do Not Match')
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
                    }} />
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login

