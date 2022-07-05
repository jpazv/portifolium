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
import Gmail from "../assets/gmail.svg"
import Linkedin from "../assets/linkedin.svg"
import About from "../assets/about.svg"


import { useNavigate } from "react-router"



function MainPage() {
    let navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="collumn">
                        {/* <img className="hellothere2" src={HelloThere2} /> */}
                        <img className="helloThere" src={HelloThere} />
                        <img className="bio" src={BioAtualizada} />
                        <div className="scroll" >
                            <img src={scroll} />
                            <a href="#scrollContent" className="scrollButton">
                            </a>
                            <div className="contato">
                                <img className="gmail" src={Gmail} />
                                <a href="mailto: jpazevedomoreiraa@gmail.com" className="gmailButton">
                                </a>
                                <img className="linkedin" src={Linkedin} />\
                                <a href="https://www.linkedin.com/in/jpazv/" className="linkedin">
                                </a>
                            </div>
                        </div>

                    </div>
                    <img className="ellipse" src={ellipse} />
                    <img className="ellipse2" src={ellipse2} />
                    <div className="projeto1" onClick={(() => navigate("/projetoZeus"))} >
                    </div>
                    <div className="projeto2" onClick={(() => navigate("/projetoZeus"))} />
                    <div className="projeto3" onClick={(() => navigate("/projetoZeus"))} />
                    <div className="projeto4" onClick={(() => navigate("/projetoZeus"))} />
                    <img className="numbers" src={numbers} />
                    <img className="projeto" src={Projects} />
                    <img className="about" src={About} onClick={(() => navigate("/projetoZeus"))} />


                </div>
            </div>

            <div id="scrollContent" class="scrollContent">
                <img className="helloThere" src={HelloThere} />
            </div>
        </>
    )
}

export default MainPage
