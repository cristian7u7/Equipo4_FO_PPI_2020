import React from "react";
import "./style3S.css"
import {Link} from 'react-router-dom';

class InfoMapa extends React.Component {

    render() {
        return (
           <div>
               <img src="https://i.ibb.co/qDgpcH7/Portada-de-Facebook-de-moda-p-lido-cer-leo-6.png" width="1265px" alt=""/>
              
              <img className="ImagenMapaGuerra" src="https://i.ibb.co/Qc4yJTL/Dise-o-sin-t-tulo-50.png" alt=""/>

              <h1 className="TituloGuerraMilDias">GUERRA</h1>
              <h2 className="SubtituloGuerra">DE LOS MIL DIAS</h2>

              <p className="ParrafitoGuerraMil">El 17 de octubre de 1899, hace 120 años, 
                  se dio el conflicto bélico declarado más
                   devastador de la historia de Colombia. 
                   Una guerra que, dicho sea de paso, no duró
                    exactamente mil días, sino en realidad 1130 
                    aproximadamente (terminó el 21 de noviembre de 1902).
                     Pero ciertamente, por cuestiones de dramatismo histórico, 
                     es más sonoro tenerle ese nombre de ‘Mil Días’.</p>


                    <div className="DivGuerraMil">
                     <p className="ParrafoGuerraMilDias2">
                     Fue causado por inconformidades ante 
                     políticas y resultados anteriores de la política
                      de la Regeneración apoyada por el Partido Nacional 
                      políticos liberales y conservadores rechazaron medidas 
                      que consideraban exageradas por parte del gobierno.
                     </p>
                     </div> 

                     <div className="DivConsecuencias">
                     <h1 className="Consecuencias">CONSECUENCIAS</h1>

                     <button className="Consecuencia1">Se crea la hegemonía conservadora</button>
                     <button className="Consecuencia2">Disolución del Partido Nacional </button>
                     <button className="Consecuencia3">Separación de Panamá</button>
                     </div>
    
                     <Link to="/Ideologias/IntroduccionMapa/mapas/" className="Imagen_1">  <img className="FlechitaGuerra" src="https://i.ibb.co/xgQ44Z9/jkkj.png " width="100px" alt=""/></Link> 
                  
           </div>
        );
    }
}

export default InfoMapa;

