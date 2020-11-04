import React from "react";
import "./style.css";

class Personas2 extends React.Component {
    render() {
        return (
            
        <div className="Personas"> 

            <div className="Niño">
            <img className="imgP" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/23490370-4c13-4006-b8dc-7929932ec0c5.png" alt=""/>
            <div>
                <p className="ParrafoP">
                    Desde esta etapa aprenderas todo lo relacionado con la política y la democracia desde que somos niños.
                </p>
            </div>
            <a  class="boton" href="/Vida_Politica_Niño"   role="button" > Ir</a>
            </div>

            <div className="Adolescente">
            <img className="imgP" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/8cb313d1-abb9-4085-b1c4-b069eb70d289.png" alt=""/>
            <div>
                <p className="ParrafoP">
                    Desde esta etapa aprenderas todo lo relacionado con la política y la democracia desde que ya somos adolescentes y como de a poquito esta responsabilidad va aumentando.
                </p>
            </div>
            <a  class="boton" href="/Vida_Politica_Adolescente"  role="button" > Ir</a>
            </div>

            <div className="Adulto">
            <img className="imgP" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/b218c006-0090-47cd-8647-34daed134432.png" alt=""/>
            <div>
            <div>
                <p className="ParrafoP">
                    Desde esta etapa aprenderas todo lo relacionado con la política y la democracia desde que ya somos adultos y como de a poquito estas responsabilidades van aumentando.
                </p>
            </div>
            </div>
            <a class="boton" href="/Vida_Politica_Adulto"   role="button" > Ir</a>
            </div>

        </div>
            
        );
    }
}

export default Personas2;