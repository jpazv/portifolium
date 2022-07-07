import React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav from "../components/nav";
import Circulo1 from "../assets/circulo1.svg"



function Project1Page() {
    let navigate = useNavigate();
    return (
    <>
        <img className="circulo1" src={Circulo1} />
        <Nav />
    </>
    )
}

export default Project1Page
