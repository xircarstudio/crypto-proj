import React from "react";
import { Outlet } from "react-router-dom";
import DashNavbar from "/src/pages/dashboard/components/DashNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <DashNavbar />
        <main className="px-4 md:px-5 xl:px-15 mt-4 md:mt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
