import React from "react";
import { useNavigate } from "react-router";
import ProjetoRepply from "../assets/projetoRepply.svg";
import Nav from "../components/nav";
import "./styles.css";




function Project2Page() {
    let navigate = useNavigate();
    return (
        <>
       
       <div className="repply"/>
        <div className="rowProject2">
            <img className="projetoRepply" src={ProjetoRepply} />
            <a href="https://github.com/jpazv/repply" target="_blank" className="goTo" rel="noreferrer">
                </a>
            <Nav />
        </div>
    </>
    )
}

export default Project2Page
