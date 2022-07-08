import React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav2 from "../components/nav2";


function Project1Page() {
    let navigate = useNavigate();
    return (
    <>
        <Nav2 />
    </>
    )
}

export default Project1Page
