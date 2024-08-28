import React from 'react';
import Foriegn from './compunent/Foriegn';
import Me from './Me';
import Leave from './Leave';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import Foriegndoctor from './compunent/ForiegnDoctor';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/me" element={<Me />}></Route>
      <Route path="/leave" element={<Leave />}></Route>
      <Route path="/" element={<Foriegn />}></Route>
      <Route path="/doctor" element={<Foriegndoctor />}></Route>
    
    </>
  )
);

const App = () => {
  return <RouterProvider router = {router} />;
};


export default App;