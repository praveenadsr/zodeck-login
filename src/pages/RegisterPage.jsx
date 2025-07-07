import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register', formData);
      setSuccess('Registered successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="relative pt-24 min-h-screen w-full">
      {/* 🔹 Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔹 Register Form */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white/20 text-white backdrop-blur-md p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-6">Create Your Account</h2>
          {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
          {success && <p className="text-green-400 text-sm mb-4 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              type="submit"
              className="w-full py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 transition-transform transform hover:scale-105"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-white underline hover:text-blue-300">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
