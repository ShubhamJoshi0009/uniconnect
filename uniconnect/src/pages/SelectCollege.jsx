import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SelectCollege({ onSelect }) {
  const [college, setCollege] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!college) return alert("Please select a college");
    onSelect(college);
    navigate("/feed");
  };

  const colleges = [
    "Chandigarh University",
    "Delhi University",
    "Mumbai University",
    "IIT Bombay",
    "Lovely Professional University",
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8">🏫 Select Your College</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-purple-950/60 p-6 rounded-2xl shadow-md w-80 flex flex-col gap-4"
      >
        <select
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          className="p-3 rounded-lg bg-black/30 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
        >
          <option value="">-- Select College --</option>
          {colleges.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 py-2 rounded-lg font-semibold transition-all"
        >
          Continue
        </button>
      </form>
    </motion.div>
  );
}