import React from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorPage from "./ErrorPage/error";
import MainPage from "./MainPage";
import Project1Page from "./Project1Page";
import Project2Page from "./Project2Page"
import Project3Page from "./Project3Page"
import Project4Page from "./Project4Page"


export default function App() {

  return (
  <Router>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
      <Route path="/projetoZeus" element={<Project1Page/>}/>
      <Route path="/projetoLeads" element={<Project2Page/>}/>
      <Route path="/projetoControlab" element={<Project3Page/>}/>
      <Route path="/projetoRenal" element={<Project4Page/>}/>

      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </Router>
  )
}