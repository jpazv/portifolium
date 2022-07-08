import React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav from "../components/nav";
import ProjetoAnime from "../assets/projetoAnime.svg"




function Project3Page() {
    let navigate = useNavigate();
    return (
        <>
       
       <div className="repply"/>
        <div className="rowProject3">
            <img className="projetoAnime" src={ProjetoAnime} />
            <Nav />
        </div>
    </>
    )
}

export default Project3Page
