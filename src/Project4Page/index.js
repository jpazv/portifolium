import React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav from "../components/nav";
import Circulo4 from "../assets/circulo4.svg"



function Project4Page() {
    let navigate = useNavigate();
    return (
    <>
        <img className="circulo4" src={Circulo4} />
        <Nav />
    </>
    )
}

export default Project4Page
