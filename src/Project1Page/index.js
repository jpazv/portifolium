import React from "react";
import { useNavigate } from "react-router";
import ProjetoZeus from "../assets/projetoZeus.svg";
import Nav from "../components/nav";
import "./styles.css";

function Project1Page() {
    let navigate = useNavigate();
    return (
        <>
            <div className="zeus" />
            <div className="rowProject1">
                <img className="projetoZeus" src={ProjetoZeus}/>
                <a href="https://github.com/jpazv/front-zeus.git" target="_blank" className="goTo" rel="noreferrer">
                </a>
                <Nav/>
            </div>

        </>
    )
}

export default Project1Page
