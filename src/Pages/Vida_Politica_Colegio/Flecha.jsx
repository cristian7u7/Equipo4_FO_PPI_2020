import React from "react";
import "./style3.css";
import { Link } from 'react-router-dom';

class Flecha extends React.Component {
    render() {
        return (
            <div className="colegio">
                
           
            <Link to="/inicio/politiqueando/Vida_Politica/Vida_Politica_Niño" className="R"> <a class="boton_Volver" href="/Vida_Politica_Niño">VOLVER</a> </Link>                                              
            </div>
        );
    }
}
export default Flecha;