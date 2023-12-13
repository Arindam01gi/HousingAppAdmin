import React from "react";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import Login from "./app/Auth/Login";
import Dashboard from "./app/Dashboard";
import Loading from "./library/Loading";
import Toaster from "./library/Toaster";

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
      <Route path="/login/" element ={<Login/>} ></Route>
      <Route path="/dashboard/" element={<Dashboard/>}></Route>
    </Routes>
  )
}

