import React from "react";
import './estilo1.css';
import { Link } from 'react-router-dom';

class Intro_Foros extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Foros">
                    <div className="conte_tittle">
                      <h1 className="tittle_1">¿TE GUSTA OPINAR? </h1>
                      <p className="tittle_2" >PARTICIPA DE NUESTROS FOROS</p>
                    </div>
                    <div className="foros_parrafo">
                        <p className="parrafo_foros">Tendrás la oportunidad de participar y compartir tu opinión con otros usuarios
                            y poder intercambiar diferentes maneras de pensar.
                        </p>
                    </div>
                </div>
                <div className="FondoForos">
                <Link to="/politiqueando/Foros" className="R">  <a className="ancle_foros" href="">¡VAMOS A LOS FOROS!</a></Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Intro_Foros;