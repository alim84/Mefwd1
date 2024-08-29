import React from "react";
import Dashboard from "./pages/Dashboard";
import Desipline from "./pages/Desipline";
import Foriegn from "./pages/Foriegn";
import Foriegndoctor from "./pages/ForiegnDoctor";
import InstituteManPower from "./pages/InstituteManPower";
import Inventory from "./pages/Inventory";
import Inventoryconsumption from "./pages/Inventoryconsumption";
import Leave from "./pages/Leave";
import Me from "./pages/Me";

import Students from "./pages/Students";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import PersonelInfo from "./pages/PersonelInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/disipline" element={<Desipline />}></Route>
      <Route path="/foriegn" element={<Foriegn />}></Route>
      <Route path="/doctor" element={<Foriegndoctor />}></Route>
      <Route path="/institute" element={<InstituteManPower />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/consumption" element={<Inventoryconsumption />}></Route>
      <Route path="/leave" element={<Leave />}></Route>
      <Route path="/me" element={<Me />}></Route>
      <Route path="/personell" element={<PersonelInfo />}></Route>
      <Route path="/student" element={<Students />}></Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
