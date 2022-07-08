import React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav from "../components/nav";
import ProjetoZeus from "../assets/projetoZeus.svg"

function Project1Page() {
    let navigate = useNavigate();
    return (
        <>
            <div className="zeus"/>
        <div className="rowProject1">
            <img className="projetoZeus" src={ProjetoZeus} />
            <Nav />
        </div>

    </>
    )
}

export default Project1Page
