import React from "react";
import "./stylec2.css";

class Parrafo extends React.Component {
    render() {
        return (
         <div>
             <div className="ContenedorParrafo">
                <p className="Parrafo_C2">
                El contralor es otro de los entes por los cuales los estudiantes pueden 
                votar, el contralor al ser electo por los estudiantes mediante un
                 mecanismo de participación estudiantil ejercerá ciertos deberes con
                  la institución, este se encargará de promover y actuar como veedor
                   de el buen uso de los recursos y bienes públicos de la institución.
                </p>
            </div>

            <div className="ConteParrafoxCon">
                <div className="ConteParrafox1Con">
                    <div className="ConteParrafox_1Con">
                        <p className="parrafox">  Este contralor debe estar
                         en uno de los dos grados superiores, sea decimo o
                          sea once para poder ser electo, esto se debe a 
                          que en estos grados ya se tiene un poco más de 
                          madurez y conciencia a la hora de ejercer este cargo</p>
                    </div>
                </div>
            </div>

            <div className="ConteParrafo_DesContralor">
                <p className="Parrafo_DesContralor">Se encarga de promover el buen uso de los enseres del colegio y 
                    actuar como veedor de el buen mantenimiento y manejo de los recursos
                     y bienes públicos de la institución.</p>
            </div>
        </div>
        );
    }
}

export default Parrafo;