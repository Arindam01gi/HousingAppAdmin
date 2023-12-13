import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../app/Dashboard";
import Login from "./login-registration/login";

const LoginRegistration = () => {
    const{pathname} = useLocation();
    <Routes>
        <Route path="/login/" element ={<Login/>} />
    </Routes>
}
export default LoginRegistration;