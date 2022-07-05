import React from "react"
import "./styles.css";
import { useNavigate } from "react-router-dom";
import HelloThere from "../assets/hellothere.svg";
import BioAtualizada from "../assets/BioAtualizada.svg"

function Project1Page() {

    let navigate = useNavigate();
  
    return (
        <>
            <img className="helloThere" src={HelloThere} />

        </>
    )
}

export default Project1Page
// onClick={()=> console.log("ck")}