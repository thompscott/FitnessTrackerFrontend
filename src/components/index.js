import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home'

function App() {
    return (
        <div>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;