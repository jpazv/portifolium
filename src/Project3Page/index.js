import React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav from "../components/nav";
import Circulo3 from "../assets/circulo1.svg"



function Project3Page() {
    let navigate = useNavigate();
    return (
    <>
        <img className="circulo3" src={Circulo3} />
        <Nav />
    </>
    )
}

export default Project3Page
