import "./App.css";
import {Route, Routes } from "react-router-dom";
import Loading from "./library/Loading";
import Toaster from "./library/Toaster";
import Login from "./views/login-registration/login";
import SocietyAdminRoutes from "./views/society-admin";


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
      <Route path="/neighbourhood/signin/" element ={<Login/>} ></Route>
      <Route path="/neighbourhood/society-admin/*" element={<SocietyAdminRoutes/>}></Route>
    </Routes>
  )
}

