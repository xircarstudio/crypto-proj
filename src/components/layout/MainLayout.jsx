import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const MainLayout = () => {
  return (
    <div className="public-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
