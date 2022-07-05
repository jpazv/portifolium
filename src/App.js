import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage/error";
import MainPage from "./MainPage";
import Project1Page from "./Project1Page";
// import MainPage from "./MainPage"



export default function App() {

  

  return (
  <Router>

    {/* linkedin
    gmail */}

    <Routes>
    <Route path="/" element={<MainPage/>}/>
      <Route path="/projetoZeus" element={<Project1Page/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </Router>

  // footer

  )
}