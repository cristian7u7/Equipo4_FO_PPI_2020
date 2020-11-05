import React from "react";
import "./style2.css";
import { Link } from 'react-router-dom';

class Buton extends React.Component {
    render() {
        return (
          
            <div className="boton">      

                    <Link to="/inicio/politiqueando/Vida_Politica/Vida_Politica_Niño/Vida_Politica_Colegio" className="R"> <a href=""  class="botonc" role="button" > <img className="img" src="https://img2.pngio.com/icono-de-edificio-de-la-escuela-clasica-descargar-png-svg-la-escuela-png-512_512.png" width="55" height="55"/> COLEGIO</a></Link>     
              
               
            </div>           
        );
    }
}

export default Buton;