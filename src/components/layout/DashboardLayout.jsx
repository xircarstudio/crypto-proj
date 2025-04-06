import React from "react";
import { Outlet } from "react-router-dom";
import DashNavbar from "../../pages/dashboard/components/DashNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="public-layout">
        <DashNavbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
