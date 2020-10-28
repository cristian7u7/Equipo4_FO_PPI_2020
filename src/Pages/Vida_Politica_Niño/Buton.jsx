import React from "react";
import "./style2.css";

class Buton extends React.Component {
    render() {
        return (
          
            <div className="boton">                 
               <a href="/Vida_Politica_Colegio"  class="btn btn-default" role="button" > <img className="img" src="https://img2.pngio.com/icono-de-edificio-de-la-escuela-clasica-descargar-png-svg-la-escuela-png-512_512.png" width="55" height="55"/> colegio</a>
               <h1 className="vacio"></h1>
            </div>           
        );
    }
}

export default Buton;