import React from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
