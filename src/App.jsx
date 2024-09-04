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
} from "react-router-dom";
import PersonelInfo from "./pages/PersonelInfo";
import Inventoryshow from "./showdata/Inventoryshow";
import Desiplineshow from "./showdata/Desiplineshow";
import Foriegnshow from "./showdata/Foriegnshow";
import DoctorForShow from "./showdata/DoctorForShow";
import ManpowerShow from "./showdata/ManpowerShow";
import Consumshow from "./showdata/Consumshow";
import Leaveshow from "./showdata/Leaveshow";
import Meshow from "./showdata/Meshow";
import Personnelshow from "./showdata/Personnelshow";
import Studentshow from "./showdata/Studentshow";
import Rootlayout from "./layout/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Dashboard />} />
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
        <Route path="/disiplineshow" element={<Desiplineshow />}></Route>
        <Route path="/foriegnshow" element={<Foriegnshow />}></Route>
        <Route path="/doctorshow" element={<DoctorForShow />}></Route>
        <Route path="/manpowershow" element={<ManpowerShow />}></Route>
        <Route path="/consumshow" element={<Consumshow />}></Route>
        <Route path="/leaveshow" element={<Leaveshow />}></Route>
        <Route path="/meshow" element={<Meshow />}></Route>
        <Route path="/personnelshow" element={<Personnelshow />}></Route>
        <Route path="/inventoryshow" element={<Inventoryshow />}></Route>
        <Route path="/studentshow" element={<Studentshow />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
