import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/zodeck-logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://13.203.198.63:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        console.log("✅ Login successful:", data);
        localStorage.setItem("role", data.role);

        toast.success("✅ Logged in successfully!", {
          autoClose: 10000, // 10 seconds
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 10000); // Navigate after 10 seconds
      } else {
        setError(data.msg || "Login failed. Try again.");
        toast.error(data.msg || "❌ Invalid credentials.");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError("Server unreachable or login error.");
      toast.error("❌ Server unreachable or error occurred.");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* <img
        src="/background.jpg"
        alt="Zodeck Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ✅ Login Form */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="bg-white/30 backdrop-blur-lg border border-white/40 shadow-2xl p-10 rounded-2xl w-full max-w-md">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-white">Login to Zodeck</h2>
            <img
              src={logo}
              alt="Zodeck Logo"
              className="w-8 h-8 object-contain rounded-full"
            />
          </div>

          {error && (
            <div className="text-red-500 bg-white bg-opacity-80 p-2 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or Employee ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

      {/* Toast container (must be outside main content) */}
      <ToastContainer position="top-center" />
    </div>
  );
}
