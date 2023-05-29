import React from 'react';
import './App.css';
import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import MapPage from "./components/MapPage";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Welcome to the Landing Page</h1>
            </header>
            <main>
                <p>This is a simple landing page created with React.</p>
                <a href="/login">Click here to Log in</a>
                <a href="/register">Click here to Register</a>
            </main>
            <footer>
                <p>&copy; 2023 Landing Page. All rights reserved.</p>
            </footer>
        </div>
    );
};

function App()
{
  const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch('/api/v1/') // Send the request to the backend using the proxy
            .then(response => response.json())
            .then(data => {
                setBackendData(data.users);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

  return(
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/mapRegular" element={<MapPage />} />
      </Routes>

  )
}

export default App;
