import React from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorPage from "./ErrorPage/error";
import MainPage from "./MainPage";
import Project1Page from "./Project1Page";


export default function App() {

  return (
  <Router>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
      <Route path="/projetoZeus" element={<Project1Page/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </Router>
  )
}