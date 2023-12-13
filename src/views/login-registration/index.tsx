import { Route, Routes, useLocation } from "react-router-dom";

import Login from "./login";

const LoginRegistration = () => {
    const{pathname} = useLocation();
    <Routes>
        <Route path="/login/" element ={<Login/>} />
    </Routes>
}
export default LoginRegistration;