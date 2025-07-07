import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

// import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
      {/* <Navbar /> ✅ Always show */}
      <Routes>
        <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
