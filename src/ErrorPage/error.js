import React from "react";
import Error from "../assets/midoriyaError.png";
import "./styles.css";


function ErrorPage() {
    
    document.body.style.backgroundColor = "#237745"

    return (
        <>
            <div className="containerError">
                <img className="error" src={Error}/>
            </div>
        </>
    )
}

export default ErrorPage