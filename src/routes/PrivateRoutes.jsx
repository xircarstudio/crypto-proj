import { Outlet, Navigate } from "react-router-dom";
//import { useAuth } from '../contexts/AuthContext';
import DashboardLayout from "../components/layout/DashboardLayout";

const PrivateRoutes = () => {
  // const { currentUser } = useAuth();

  return (
    /*currentUser ?*/ <DashboardLayout>
      <Outlet />
    </DashboardLayout>
    /* ) : (
    <Navigate to="/login" />*/
  );
};

export default PrivateRoutes;
