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
            <a href="https://github.com/jpazv/jogos/blob/main/jogo-da-bolinha.html" target="_blank" className="goTo" rel="noreferrer">
                </a>
            <Nav />
        </div>
    </>
    )
}

export default Project4Page
