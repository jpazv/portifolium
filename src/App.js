import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import ErrorPage from "./ErrorPage/error";
import MainPage from "./MainPage";
import Project1Page from "./Project1Page";
import Project2Page from "./Project2Page";
import Project3Page from "./Project3Page";
import Project4Page from "./Project4Page";
import ScrollToTop from "./ScrollToTop";


export default function App() {

  return (
    <Router >
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projetoZeus" element={<Project1Page />} />
          <Route path="/projetoRepply" element={<Project2Page />} />
          <Route path="/projetoAnime" element={<Project3Page />} />
          <Route path="/projetoBall" element={<Project4Page />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}
