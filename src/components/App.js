import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from "./index";

function App() {
    return (
        <div>
            <main>
                <nav>
                <Link className="tab" to="/Home">Home</Link>
                <Link className="tab" to="/login">Login/Logout</Link>
                <Link className="tab" to="/register">Register</Link>
                <Link className="tab" to="/routines">Routines</Link>
                <Link className="tab" to="/activities">Activities</Link>
                <Link className="tab" to="/activities/me">My Activities</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;