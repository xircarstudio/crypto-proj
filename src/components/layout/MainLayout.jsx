import { Outlet } from "react-router-dom";
import Navbar from "/src/pages/public/components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
