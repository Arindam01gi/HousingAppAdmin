import React from "react";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import Dashboard from "./app/Dashboard";
import Loading from "./library/Loading";
import Toaster from "./library/Toaster";
import Login from "./views/login-registration/login";

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
      <Route path="/neighbourhood/*" element ={<Login/>} ></Route>
      {/* <Route path="/dashboard/" element={<Dashboard/>}></Route> */}
    </Routes>
  )
}

