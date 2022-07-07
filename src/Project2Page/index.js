import React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav from "../components/nav";
import Circulo2 from "../assets/circulo2.svg"



function Project2Page() {
    let navigate = useNavigate();
    return (
    <>
        <img className="circulo2" src={Circulo2} />
        <Nav />
    </>
    )
}

export default Project2Page
