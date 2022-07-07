import React from "react";
import "./styles.css";
import ellipse from "../../assets/ellipse.svg"
import ellipse2 from "../../assets/ellipse2.svg"
import Projects from "../../assets/projects2.svg"
import About from "../../assets/about2.svg"
import FunFacts from "../../assets/funFacts.svg"
import Circulo from "../../assets/circulo.svg"
import Profile from "../../assets/profilePic.svg"
import FindProblem from "../../assets/findProblem.svg"
import ThisIs from "../../assets/thisIs.svg"
import Jp from "../../assets/jp.svg"
import Emoji from "../../assets/emoji.svg"
import GetTouch from "../../assets/getTouch.svg"


import { useNavigate } from "react-router"


function Nav2() {
    let navigate = useNavigate();
    return (
        <div className="fixed">
            <img className="ellipse" src={ellipse} />
            <img className="ellipse2" src={ellipse2} />
            <img className="projetoAbout" src={Projects} />
            <img className="about" src={About} onClick={(() => navigate("/"))} />
            <img className="thisIs" src={ThisIs} />
            <img className="emoji" src={Emoji}/>
            <img className="profile" src={Profile} />
            <img className="problem" src={FindProblem} />
            <img className="funFacts" src={FunFacts} />
            <img className="getTouch" src={GetTouch} />
            <img className="circulo" src={Circulo} />
            <img className="jp" src={Jp} />
        </div>

    )
}

export default Nav2
