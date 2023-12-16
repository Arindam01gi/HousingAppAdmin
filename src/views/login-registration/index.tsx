import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Login from "./login";

const LoginRegistrationRoutes = () => {
    const { pathname } = useLocation();
    return(
        <Routes>
            <Route path="/login/" element ={<Login/>} />
            <Route
                path="/"
                element={<Navigate to={`/${pathname.split("/")[1]}/login`} />}
            />
        </Routes>
    )
}
export default LoginRegistrationRoutes;