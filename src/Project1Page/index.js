import  React from "react";
import { useNavigate } from "react-router"
import "./styles.css";
import Nav from "../components/nav";



function Project1Page() {
    let navigate = useNavigate();
    return (
        <Nav/>
    )
}

export default Project1Page
