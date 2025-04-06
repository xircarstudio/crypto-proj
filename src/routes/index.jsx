import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../pages/public/home/Home";
import ErrorPage from "./ErrorPage";
import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import Profile from "../pages/dashboard/profile/Profile";
import About from "../pages/public/about/About";

export default function Routing() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}
