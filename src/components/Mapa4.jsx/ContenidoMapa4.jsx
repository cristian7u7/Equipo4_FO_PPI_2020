import React from "react";
import '../Mapa4.jsx/style9s.css'
import { Link } from 'react-router-dom';

class ContenidoMapa4 extends React.Component {

    render() {
        return (
            <div>
              <img src=" https://i.ibb.co/L9xXs0H/Portada-de-Facebook-de-moda-p-lido-cer-leo-11.png" width="1280px" alt=""/>

              <img className="ImagenMapitaLider" src="https://i.ibb.co/Qc4yJTL/Dise-o-sin-t-tulo-50.png" alt=""/>

              <h1 className="TituloLideres">LÍDERES</h1>
                <h2 className="SubtituloLideres">SOCIALES</h2>

            <p className="LiderSocialParrafo">
            Un líder social son aquellas personas que se encargan de la defensa
         De los Derechos Humanos, de los territorios, del medio ambiente, 
            de la educación, de la cultura en las comunidades de Colombia. 

            </p>
            <div>
                   
                </div><Link to="/Ideologias/IntroduccionMapa/mapas/" className="imagen_2"><img  className="imagenflechaiz"src="https://i.ibb.co/xgQ44Z9/jkkj.png " width="100px" alt=""/></Link> 

             <div className="DivLideres">
                <p className="ProblemaLideres">
                Lo que sucede es que Colombia es un país peligroso 
        para los líderes y lideresas sociales por la falta de respeto respecto a ideologías 
    o maneras de pensar.
             Si se hace un diagnóstico las amenazas, 
la violencia y el desplazamiento forzado 
son el común denominador. Según Indepaz, al menos
 627 líderes del país han sido asesinados tras el 
Acuerdo de Paz de 2016.

                </p>
                </div>

         


            <img className="CirucloLideres" src="https://i.ibb.co/9hnYcxH/circle-cropped-5.png" alt=""/>
            <img className="CirucloLideres" src="  https://i.ibb.co/1TXkVXn/circle-cropped-7.png" alt=""/>
            <img className="CirucloLideres" src="https://i.ibb.co/VtWpN2W/circle-cropped-8.png" alt=""/>
            </div>
          
           
        
        );

    }
}
export default  ContenidoMapa4;