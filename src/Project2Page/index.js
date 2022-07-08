import React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav from "../components/nav";
import ProjetoRepply from "../assets/projetoRepply.svg"




function Project2Page() {
    let navigate = useNavigate();
    return (
        <>
       
       <div className="repply"/>
        <div className="rowProject2">
            <img className="projetoRepply" src={ProjetoRepply} />
            <Nav />
        </div>
    </>
    )
}

export default Project2Page
