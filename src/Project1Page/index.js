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
                <img className="projetoZeus" src={ProjetoZeus} />
                <Nav />
            </div>

        </>
    )
}

export default Project1Page
