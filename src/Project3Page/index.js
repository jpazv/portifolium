import React from "react";
import { useNavigate } from "react-router";
import ProjetoAnime from "../assets/projetoAnime.svg";
import Nav from "../components/nav";
import "./styles.css";




function Project3Page() {
    let navigate = useNavigate();
    return (
        <>
       
       <div className="repply"/>
        <div className="rowProject3">
            <img className="projetoAnime" src={ProjetoAnime} />
            <a href="https://github.com/jpazv/animesearch" target="_blank" className="goTo" rel="noreferrer">
                </a>
            <Nav />
        </div>
    </>
    )
}

export default Project3Page
