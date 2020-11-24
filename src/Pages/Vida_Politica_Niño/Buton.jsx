import React from "react";
import "./style2.css";
import { Link } from 'react-router-dom';

class Buton extends React.Component {
    render() {
        return (
          
            <div className="conteColegio">      
                <div className="conteColegio">
                    <img className="imageColegioIntro" src="https://i.ibb.co/TMbSH6M/6aef37bbbf00a914ba90fe18f313db7c-ilustraci-n-de-edificio-de-escuela-primaria-by-vexels.png" alt=""/>
                    <div className="conte_parrafoColegioIntro">
                    <Link to="/inicio/politiqueando/Vida_Politica/Vida_Politica_Niño/Vida_Politica_Colegio" className="R"> <a href=""  class="btn_2 btn-default" role="button" > <p className="parrafoColegioIntro">¡VEAMOS COMO SE EVIDENCIA ESTO EN EL ÁMBITO DEL COLEGIO!</p></a> </Link>
                    </div>
                </div>
            </div>           
        );
    }
}

export default Buton;