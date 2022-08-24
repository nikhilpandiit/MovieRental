import "./App.css";
import Navbar from "./component/Navbar";
import React from "react";
import { loadLogin } from "./actions/loginAction";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLogin());
  });
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
