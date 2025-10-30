import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "") return alert("Enter your name to continue");
    const userData = { username };
    onLogin(userData);
    navigate("/select-college");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold mb-8">🎓 UniConnect</h1>
      <form
        onSubmit={handleLogin}
        className="bg-purple-950/60 p-6 rounded-2xl shadow-md w-80 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 rounded-lg bg-black/30 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 py-2 rounded-lg font-semibold transition-all"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => {
            onLogin({ username: "Guest" });
            navigate("/select-college");
          }}
          className="text-purple-300 hover:text-purple-500 underline mt-2"
        >
          Continue as Guest
        </button>
      </form>
    </motion.div>
  );
}