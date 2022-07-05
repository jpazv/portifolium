import { React, Linking, useEffect } from "react";
import "./styles.css";
import HelloThere from "../assets/hellothere.svg";
// import HelloThere2 from "../assets/hellothere2.svg"
import BioAtualizada from "../assets/BioAtualizada.svg"
import ellipse from "../assets/ellipse.svg"
import ellipse2 from "../assets/ellipse2.svg"
import scroll from "../assets/scrolldown.svg"
import numbers from "../assets/numbers.svg"
import Projects from "../assets/projects.svg"
import Sombra from "../assets/sombra.svg"
import Gmail from "../assets/gmail.svg"
import Linkedin from "../assets/linkedin.svg"
import About from "../assets/about.svg"


import { useNavigate } from "react-router"



function Project1Page() {
    let navigate = useNavigate();
    return (
        <>
            <div className="container1">
                <div className="row1">
                    <img className="ellipse3" src={ellipse} />
                    <img className="ellipse4" src={ellipse2} />
                    </div>
                    <img className="projects1" src={Projects} />
                    <div className="projects2" />
                    <img className="sombra1" src={Sombra} />
                    <img className="about1" src={About} />
                    <div className="contato1">

                        <img className="gmail1" src={Gmail} />
                        <a href="mailto: jpazevedomoreiraa@gmail.com" className="gmailButton">
                        </a>

                        <img className="linkedin1" src={Linkedin} />\
                        <a href="https://www.linkedin.com/in/jpazv/" className="linkedin">
                        </a>
                        <div></div>
                    </div>



                </div>
        </>
    )
}

export default Project1Page
