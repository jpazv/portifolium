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
                <div className="gitButton" onClick={console.log("clicado")}/>
                <a href="https://www.linkedin.com/in/jpazv/" className="goTo">
                    aaaaaa
                </a>
                <Nav/>
            </div>

        </>
    )
}

export default Project1Page
