import React from "react";
import './style4S.css'
import { Link } from 'react-router-dom';

class InfoMapa3 extends React.Component {

    render() {
        return (
            <div>
                <img src="https://i.ibb.co/dp2Wzzs/Portada-de-Facebook-de-moda-p-lido-cer-leo-9.png" width="1280px" alt="" />


                <h1 className="TituloBatayaBoyaca">BATALLA</h1>
                <h2 className="SubtituloBatalla">DE BOYACÁ</h2>

                <img className="ImagenMapaBatalla" src="https://i.ibb.co/Qc4yJTL/Dise-o-sin-t-tulo-50.png" alt="" />

                <p className="ParrafoBatalla">
                    La batalla del Puente de Boyacá fue la confrontación
                    más importante de la guerra de independencia de Colombia
                    que garantizó el éxito de la Campaña Libertadora de Nueva Granada.
                    Este acontecimiento tuvo lugar el día 7 de agosto de 1819 en
                    el cruce del río Teatinos, en inmediaciones de Tunja.
              </p>

             
 

                <img className="FotoBatalla" src="https://i.ibb.co/SXhX3Ft/Portada-de-Facebook-de-moda-p-lido-cer-leo-10.png"/>

                <p className="ParrafoNose">La batalla finaliza con la rendición en masa de la división realista, y fue la culminación de 78 días de campaña iniciada desde Venezuela por el Libertador Simón Bolívar para independizar la Nueva Granada.</p>
                <Link to="/Ideologias/IntroduccionMapa/mapas/" className="Imagen_1"> <img className="ImagenFlechitaBatalla" src="https://i.ibb.co/xgQ44Z9/jkkj.png " alt=""/></Link>
            </div>

        );

    }
}
export default InfoMapa3;

