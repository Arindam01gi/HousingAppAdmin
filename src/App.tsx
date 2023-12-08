import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./app/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element ={<Login/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
