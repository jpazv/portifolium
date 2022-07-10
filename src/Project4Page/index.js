import React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav from "../components/nav";
import ProjetoBall from "../assets/projetoBall.svg"




function Project4Page() {
    let navigate = useNavigate();
    return (
        <>
       
       <div className="ball"/>
        <div className="rowProject4">
            <img className="projetoBall" src={ProjetoBall}    />
            <Nav />
        </div>
    </>
    )
}

export default Project4Page
