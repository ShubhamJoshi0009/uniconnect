import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, MessageCircle, PlusCircle, Settings, Users, Store } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { icon: <Home />, path: "/feed" },
    { icon: <Users />, path: "/friends" },
    { icon: <PlusCircle />, path: "/create" },
    { icon: <MessageCircle />, path: "/chat" },
    { icon: <Store />, path: "/rent" },
    { icon: <User />, path: "/profile" },
    { icon: <Settings />, path: "/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-purple-950/80 backdrop-blur-md text-white flex justify-around py-3 border-t border-purple-800">
      {navItems.map((item, i) => (
        <Link
          key={i}
          to={item.path}
          className={`transition-all ${
            pathname === item.path ? "text-purple-400 scale-110" : "text-gray-400 hover:text-white"
          }`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}