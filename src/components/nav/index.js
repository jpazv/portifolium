import  React  from "react";
import "./styles.css";
import ellipse from "../../assets/ellipse.svg"
import ellipse2 from "../../assets/ellipse2.svg"
import numbers from "../../assets/numbers.svg"
import Projects from "../../assets/projects.svg"

import About from "../../assets/about.svg"


import { useNavigate } from "react-router"



function Nav() {
    let navigate = useNavigate();
    return (
             <div className="fixed">
                    <img className="ellipse" src={ellipse} />
                    <img className="ellipse2" src={ellipse2} />
                    <div className="projeto1" onClick={(() => navigate("/projetoZeus"))} >
                    </div>
                    <div className="projeto2" onClick={(() => navigate("/projetoZeus"))} />
                    <div className="projeto3" onClick={(() => navigate("/projetoZeus"))} />
                    <div className="projeto4" onClick={(() => navigate("/projetoZeus"))} />
                    <img className="numbers" src={numbers} />
                    <img className="projeto" src={Projects} />
                    <img className="about" src={About} onClick={(() => navigate("/"))} />
                    </div>
    )
}

export default Nav
