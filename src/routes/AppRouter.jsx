import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Home from "../pages/home/Home";
// import Dashboard from "../pages/home/Dashboard";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import Analytics from "../pages/analytics/Analytics";
import Payment from "../pages/payment/Payment";
import Complain from "../pages/complain/Complain";
import Mail from "../pages/mail/Mail";
import Employee from "../pages/employees/Employee";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}
