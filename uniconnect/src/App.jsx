import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "./pages/Login";
import SelectCollege from "./pages/SelectCollege";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import RentHub from "./pages/RentHub";
import Settings from "./pages/Settings";
import FindFriends from "./pages/FindFriends";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";

export default function App() {
  const [user, setUser] = useState(null);
  const [college, setCollege] = useState(null);

  return (
    <Router>
      <div className="bg-gradient-to-br from-purple-900 via-black to-purple-950 text-white min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <Routes>
            {/* LOGIN PAGE */}
            <Route path="/" element={<Login onLogin={(u) => setUser(u)} />} />

            {/* COLLEGE SELECTION */}
            <Route
              path="/select-college"
              element={
                user ? (
                  <SelectCollege onSelect={(c) => setCollege(c)} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* FEED PAGE */}
            <Route
              path="/feed"
              element={
                user && college ? (
                  <>
                    <Feed />
                    <Navbar />
                  </>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* FIND FRIENDS */}
            <Route
              path="/friends"
              element={
                user ? (
                  <>
                    <FindFriends />
                    <Navbar />
                  </>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* CHAT PAGE */}
            <Route
              path="/chat"
              element={
                user ? (
                  <>
                    <Chat />
                    <Navbar />
                  </>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* RENTING PAGE */}
            <Route
              path="/rent"
              element={
                user ? (
                  <>
                    <RentHub />
                    <Navbar />
                  </>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* PROFILE PAGE */}
            <Route
              path="/profile"
              element={
                user ? (
                  <>
                    <Profile />
                    <Navbar />
                  </>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* SETTINGS PAGE */}
            <Route
              path="/settings"
              element={
                user ? (
                  <>
                    <Settings />
                    <Navbar />
                  </>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* CREATE POST */}
            <Route
              path="/create"
              element={
                user ? (
                  <>
                    <CreatePost />
                    <Navbar />
                  </>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* FALLBACK */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}