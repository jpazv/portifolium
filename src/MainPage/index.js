import React from "react";
import HelloThere from "../assets/hellothere.svg";
import "./styles.css";
// import HelloThere2 from "../assets/hellothere2.svg"
import Bio from "../assets/bio.svg";
import Gmail from "../assets/gmail.svg";
import Linkedin from "../assets/linkedin.svg";
import scroll from "../assets/scrolldown.svg";
import scrollDownInformation from "../assets/scrollDownInformation.png";
import Nav from "../components/nav";

import { useNavigate } from "react-router";



function MainPage() {
    let navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="collumn">
                        <img className="helloThere" src={HelloThere}/>
                        <img className="bio" src={Bio} />
                        <div className="scroll">
                            <img src={scroll} />
                            <a href="#scrollContent" className="scrollButton">
                            </a>
                            <div className="contato">
                                <img className="gmail" src={Gmail} />
                                <a href="mailto: jpazevedomoreiraa@gmail.com" target="_blank" className="gmailButton" rel="noreferrer">
                                </a>
                                <img className="linkedin" src={Linkedin} />
                                <a href="https://www.linkedin.com/in/jpazv/" target="_blank" className="linkedinButton" rel="noreferrer">
                                </a>
                            </div>
                        </div>
                    </div>
                    <Nav/>
                </div>
            </div>

            <div id="scrollContent" className="scrollContent">
                <div className="characters">
                    <div className="cardCharacter">
                        <div className="top"/>
                        <img className="scrollDownContent" src={scrollDownInformation} />
                        <div className="footer"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
