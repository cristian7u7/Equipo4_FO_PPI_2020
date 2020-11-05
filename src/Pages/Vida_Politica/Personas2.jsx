import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

class Personas2 extends React.Component {
    render() {
        return (
            
        <div className="Personas"> 

            <div className="Niño">
            <img className="imgP" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/23490370-4c13-4006-b8dc-7929932ec0c5.png" alt=""/>
            <div className="ConteParrafoP">
                <p className="ParrafoP">
                    Desde esta etapa aprenderas todo lo relacionado con la política y la democracia desde que somos niños.
                </p>
            </div>
            <Link to="/inicio/politiqueando/Vida_Politica/Vida_Politica_Niño" className="R"><a  class="boton" href=""   role="button" > Ir</a> </Link>
            

            </div>

            <div className="Adolescente">
            <img className="imgP" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/8cb313d1-abb9-4085-b1c4-b069eb70d289.png" alt=""/>
            <div className="ConteParrafoP">
                <p className="ParrafoP">
                    Desde esta etapa aprenderas todo lo relacionado con la política y la democracia desde que ya somos adolescentes y como de a poquito esta responsabilidad va aumentando.
                </p>
            </div>

            <Link to="/inicio/politiqueando/Vida_Politica/Vida_Politica_Adolescente" className="R"> <a  class="boton" role="button" > Ir</a></Link> 

            </div>

            <div className="Adulto">
            <img className="imgP" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/b218c006-0090-47cd-8647-34daed134432.png" alt=""/>
            <div>
            <div className="ConteParrafoP">
                <p className="ParrafoP">
                    Desde esta etapa aprenderas todo lo relacionado con la política y la democracia desde que ya somos adultos y como de a poquito estas responsabilidades van aumentando.
                </p>
            </div>
            </div>

            <Link to="/inicio/politiqueando/Vida_Politica/Vida_Politica_Adulto" className="R"> <a class="boton" href="/Vida_Politica_Adulto"   role="button" > Ir</a></Link>
           

            </div>

        </div>
            
        );
    }
}

export default Personas2;