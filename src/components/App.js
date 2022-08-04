import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home, Login, Register, Routines, Activities, MyRoutines, } from "./index";

function App() {
    const [ token, setToken ] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");
    const [username, setUsername] = useState(localStorage.getItem("username") ? localStorage.getItem("username") : "");
    return (
        <div>
            <main>
                <div className="header">
                    <nav>
                    <Link className="tab" to="/home">Home</Link>
                    <Link className="tab" to="/login">Login/Logout</Link>
                    <Link className="tab" to="/register">Register</Link>
                    <Link className="tab" to="/activities">Activities</Link>
                    <Link className="tab" to="/routines">Routines</Link>
                    {(token ? <Link className="tab" to="/routines/me">My Routines</Link>: null)}
                    </nav>
                    { (token ? (
                        <div className="currentUser">
                       
                        <h3>Logged in as {username}</h3>
                    </div>
                    ): (null))}
                    
                    
                </div>
                <Routes>
                    <Route path="/" element={<Home token={token} />} />
                    <Route path="/home" element={<Home token={token} />} />
                    <Route path="/login" element={<Login token={token} setToken={setToken} username={username} setUsername={setUsername} />} />
                    <Route path="/register" element={<Register token={token} setToken={setToken} username={username} setUsername={setUsername} />} />
                    <Route path="/routines" element={<Routines token={token} />} />
                    <Route path="/activities" element={<Activities token={token} />} />
                    <Route path="/routines/me" element={<MyRoutines token={token} username={username} />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;