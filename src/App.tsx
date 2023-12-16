import "./App.css";
import {Navigate, Route, Routes } from "react-router-dom";
import Loading from "./library/Loading";
import Toaster from "./library/Toaster";
import SocietyAdminRoutes from "./views/society-admin";
import LoginRegistrationRoutes from "./views/login-registration";
import { connect } from "react-redux";
import { StoreState } from "./model/reduxModels";

function App({admn_details}:AppProps) {
  return (
    <div>
      <MainRouter admn_details={admn_details}/>
      <Loading />
      <Toaster />
    </div>
  );
}
const mapStateToProps = (state: StoreState) => {
  return {
    admn_details: state.adminAuth.loginResponse,
  };
};
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
interface AppProps{
  admn_details:any
}

const MainRouter = ({admn_details}:any) => {
  return(
    <Routes>
      {!!admn_details  && ( <Route path="/society-admin/*" element={<SocietyAdminRoutes/>}></Route>)}
      <Route path="/signin/*" element ={<LoginRegistrationRoutes/>} ></Route>
      <Route path="/" element={<Navigate replace to={"/signin/"}/>}/>
      <Route path="*" element={<Navigate replace to={"/signin/"}/>}/>
    </Routes>
  )
}

