import { Route, Routes, useLocation } from "react-router-dom";
import SocietyAdminDashboard from "./dashboard";

const SocietyAdminRoutes = () => {
    const { pathname } = useLocation();
    return(
        <Routes>
            <Route path="admin-dashboard/" element={<SocietyAdminDashboard/>}/>
        </Routes>
    )
}
export default SocietyAdminRoutes;