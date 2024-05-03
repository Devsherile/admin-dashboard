import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Home from "../pages/landing/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/users/Users";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import Subscribers from "../pages/subscribers/Subscribers";
import Blog from "../pages/blog/Blog";
import Invoices from "../pages/invoices/Invoices";
import Comments from "../pages/comments/Comments";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscribers" element={<Subscribers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}
