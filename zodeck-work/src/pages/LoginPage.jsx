import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/zodeck-logo.png";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }} // ✅ Ensure this image is high quality
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Login Box */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-white/30 backdrop-blur-md border border-white/40 shadow-2xl p-10 rounded-2xl w-full max-w-md transition duration-300 hover:scale-[1.01]">
          {/* Heading */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-white">Login to Zodeck</h2>
            <img
              src={logo}
              alt="Zodeck Logo"
              className="w-8 h-8 object-contain rounded-full"
            />
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email or Employee ID"
              className="w-full px-4 py-3 rounded-md bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-md hover:from-pink-500 hover:to-purple-600 transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
