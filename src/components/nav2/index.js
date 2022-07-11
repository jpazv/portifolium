import React from "react";
import About from "../../assets/about2.svg";
import ellipse from "../../assets/ellipse.svg";
import ellipse2 from "../../assets/ellipse2.svg";
import Emoji from "../../assets/emoji.svg";
import FindProblem from "../../assets/findProblem.svg";
import Lets from "../../assets/lets.svg";
import Profile from "../../assets/profilePic.svg";
import Projects from "../../assets/projects2.svg";
import Sombra from "../../assets/sombra.svg";
import ThisIs from "../../assets/thisIs.svg";
import "./styles.css";



import { useNavigate } from "react-router";


function Nav2() {
    let navigate = useNavigate();
    return (
        <>
            <div className="fixed2">
                <div className="ellipseLeft">
                    <img className="ellipse" src={ellipse} />
                    <img className="ellipse4" src={ellipse2} />
                    <img className="projetoAbout" src={Projects} />
                    <img className="about2" src={About} />
                    <img className="sombra" src={Sombra}/>
                    <div className="returnMain" onClick={(() => navigate("/"))}/>
                </div>
                <div className="collumAbout">
                    <img className="thisIs" src={ThisIs} />
                    <img className="emoji" src={Emoji} />
                    <img className="profile" src={Profile} />
                </div>
            </div>
            <div className="fixed3">
                    <img className="problem" src={FindProblem} />
                    <img className="lets" src={Lets} />
            </div>
        </>
    )
}

export default Nav2
