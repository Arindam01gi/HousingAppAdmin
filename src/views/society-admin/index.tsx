import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SocietyAdminDashboard from "./dashboard";

const SocietyAdminRoutes = () => {
  const { pathname } = useLocation();
  return (
    <Routes>
      <Route path="admin-dashboard/" element={<SocietyAdminDashboard />} />
      <Route
        path="/"
        element={<Navigate to={`/${pathname.split("/")[1]}/login`} />}
      />
    </Routes>
  );
};
export default SocietyAdminRoutes;
