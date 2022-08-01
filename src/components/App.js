import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home, Login, Register, Routines, Activities, MyActivities } from "./index";

function App() {
    return (
        <div>
            <main>
                <nav>
                    <Link className="tab" to="/home">Home</Link>
                    <Link className="tab" to="/login">Login/Logout</Link>
                    <Link className="tab" to="/register">Register</Link>
                    <Link className="tab" to="/routines">Routines</Link>
                    <Link className="tab" to="/activities">Activities</Link>
                    <Link className="tab" to="/activities/me">My Activities</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/routines" element={<Routines />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/activities/me" element={<MyActivities />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;