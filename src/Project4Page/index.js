import React from "react";
import { useNavigate } from "react-router";
import ProjetoBall from "../assets/projetoBall.svg";
import Nav from "../components/nav";
import "./styles.css";




function Project4Page() {
    let navigate = useNavigate();
    return (
        <>
       
       <div className="ball"/>
        <div className="rowProject4">
            <img className="projetoBall" src={ProjetoBall}/>
            <div className="gitButton"/>
            <Nav />
        </div>
    </>
    )
}

export default Project4Page
