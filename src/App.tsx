import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./app/Auth/Login";
import Dashboard from "./app/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element ={<Login/>} ></Route>

        <Route path="dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
