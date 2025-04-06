import { Outlet } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

const PublicRoutes = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PublicRoutes;
