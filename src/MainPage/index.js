import  React  from "react";
import "./styles.css";
import HelloThere from "../assets/hellothere.svg";
// import HelloThere2 from "../assets/hellothere2.svg"
import Bio from "../assets/bio.svg"
import scroll from "../assets/scrolldown.svg"
import Gmail from "../assets/gmail.svg"
import Linkedin from "../assets/linkedin.svg"
import scrollDownInformation from "../assets/scrollDownInformation.png"
import Footer from "../assets/footer.svg"
import Nav from "../components/nav";

import { useNavigate } from "react-router"



function MainPage() {
    let navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="collumn">
                        {/* <img className="hellothere2" src={HelloThere2} /> */}
                        {/* <div className="shadow"/> */}
                        <img className="helloThere" src={HelloThere} />
                        <img className="bio" src={Bio} />
                        <div className="scroll" >
                            <img src={scroll} />
                            <a href="#scrollContent" className="scrollButton">
                            </a>
                            <div className="contato">
                                <img className="gmail" src={Gmail} />
                                <a href="mailto: jpazevedomoreiraa@gmail.com" className="gmailButton">
                                </a>
                                <img className="linkedin" src={Linkedin} />
                                <a href="https://www.linkedin.com/in/jpazv/" className="linkedinButton">
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
