import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="relative pt-24 min-h-screen w-full">
      {/* 🔹 Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔹 Login Form */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl p-10 rounded-3xl w-full max-w-md mx-auto transition duration-300 hover:scale-[1.01]">
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">
            Login to Zodeck
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Email or Employee ID"
              className="w-full px-4 py-3 rounded-md bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-md hover:from-pink-500 hover:to-purple-600 transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center text-white mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="underline hover:text-pink-300">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
