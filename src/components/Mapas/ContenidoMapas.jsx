import React from "react";
import "./style5S.css"
import {Link} from 'react-router-dom';


class ContenidoMapas extends React.Component{
    render(){
        return (
            <div className="MapaBandera">
                <div>

                <div className="DivTexto">          
                <div className="div-wel">
                  <h1 className="Bienvenido1">BIENVENID@</h1>
                  <h2 className="Bienvenido2" >A ESTE GRAN RECORRIDO</h2>
                  <p></p>
                </div>
                <div>
                <div  STYLE=" top:350px; left:100px;  visibility:visible  z-index:1">
                <p className="ParrafoReflexion">
                  A continuación encontraras un mapa con una serie de banderas, cada bandera significa una consecuencia
                    traída por las ideologías políticas en Colombia, recuerda
                     que debes prestar mucha atención a cada hito que te contemos para que 
                  la experiencia sea llena de conocimientos para ti  
                  </p>
                  </div>  
                </div>
                <div className="divsito">
                <img classsName="ImagenMapa10" src="https://i.ibb.co/6PZP9ZQ/sdffg.png" width="500px" alt="" />
                </div>

           
                <Link to="/Ideologias/IntroduccionMapa" className="Bandera_2">     <img className="FlechitaInicio" src="https://i.ibb.co/xgQ44Z9/jkkj.png " alt=""/></Link> 
                <div STYLE="position:absolute; top:500px; left:200px;  visibility:visible  z-index:1">
                <Link to="/Ideologias/IntroduccionMapa/mapas/mapa2" className="Bandera_1"><img classsName="Bandera_1" src="https://i.ibb.co/ZB7m3CS/bandera.png" width="200px" alt="" /></Link> 

                    </div>

                    <div STYLE="position:absolute; top:350px; left:100px;  visibility:visible  z-index:1">
                        
                        <Link to="/Ideologias/IntroduccionMapa/mapas/mapa2/mapa3" className="Bandera_2"><img classsName="Bandera_2" src="https://i.ibb.co/ZB7m3CS/bandera.png" width="200px" alt="" /></Link> 
                    </div>

                    <div STYLE="position:absolute; top:400px; left:300px;  visibility:visible  z-index:1">
                       
                        <Link to="/Ideologias/IntroduccionMapa/mapas/mapa2/mapa3/mapa4" className="Bandera_3"> <img classsName="Bandera_3" src="https://i.ibb.co/ZB7m3CS/bandera.png" width="200px" alt="" /></Link> 
                    </div>
               
               
                </div>

            
   
                
                 
                
                </div>
                
            </div>
           
          

        );
    }
}
export default ContenidoMapas;

