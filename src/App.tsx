import "./App.css";
import {Navigate, Route, Routes } from "react-router-dom";
import Loading from "./library/Loading";
import Toaster from "./library/Toaster";
import SocietyAdminRoutes from "./views/society-admin";
import LoginRegistrationRoutes from "./views/login-registration";

function App() {
  return (
    <div>
      <MainRouter/>
      <Loading />
      <Toaster />
    </div>
  );
}
export default App;

const MainRouter = () => {
  return(
    <Routes>
      <Route path="/signin/*" element ={<LoginRegistrationRoutes/>} ></Route>
      <Route path="/society-admin/*" element={<SocietyAdminRoutes/>}></Route>
      <Route path="/" element={<Navigate replace to={"/signin/"}/>}/>
      <Route path="*" element={<Navigate replace to={"/signin/"}/>}/>
    </Routes>
  )
}

