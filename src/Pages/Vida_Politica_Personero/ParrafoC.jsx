import React from "react";
import "./styleC.css";

class Parrafo extends React.Component {
    render() {
        return (
            <div>
                <div className="ContenedorParrafo">
                <p className="Parrafo_C">
                El personero es otro de los entes por los cuales los estudiantes 
                pueden votar o postularse, para postularse el estudiante debe de 
                ser de ultimo grado, ya que este deberá de actuar como promotor 
                de los derechos y deberes de los estudiantes , para que el estudiante
                que desea postularse a este cargo debe cumplir algunos requisitos,
                uno de estos requisitos es llevar más de un año en la institución,
                otro de estos que es de los mas importantes es estar en grado 11.
                </p>
             </div>
        
             <div className="ConteParrafox2">
                <div className="ConteParrafox1">
                    <div className="ConteParrafox_1">
                        <p className="parrafox"> Al igual que como el contralor el personero
                        será electo mediante un mecanismo de participación estudiantil,
                        además de esto en su periodo como lìder de los estudiantes se deberán
                        de ver reflejadas las propuestas que hizo al lanzarse como personero</p>
                    </div>
                </div>
            </div>

            <div className="ContenedorPersoneroFinal">
                <div className="ContenPerFi">
                    <p className="parrafoPer">El personero será el encargado de
                        representar a la institución por
                        medio de su papel de líder estudiantil.
                    </p>
                </div>
                <div className="ContenPerFi">
                    <p className="parrafoPer">El personero es como hemos escuchado por ahí:
                        "La mano derecha de los estudiantes", es la voz
                        de todos los que peretenecen en la institución </p>
                </div>
                <div className="ContenPerFi">
                    <p className="parrafoPer">Su principal deber como líder es velas y 
                        promover los deberes y los derechos de los
                        estudiantes, es por eso, que debe ser una 
                        persona muy neutral. </p>
                </div>
            </div>
        </div>
        );
    }
}

export default Parrafo;