import React from "react";
import "./style10S.css"
import {Link} from 'react-router-dom';

class ContenidoIntroduccion extends React.Component{
    render(){
        return(
            <React.Fragment>
                <img className="voto-img" src="https://i.ibb.co/zrZ316S/map.png" alt=""/>
                <div className="voto-title">
                    <h1 className="Titulo-Mapa1">MAPAS</h1>
                    <h2 className="Titulo-Mapa2">HISTORIA, EVOLUCION Y CAMBIO</h2>;
                    <p className="Titulo-Par">En esta parte de la plataforma vamos a observar los 
                    diferentes hitos y consecuencias que han dejado las diferencias ideológias y 
                    pensamientos en Colombia, todo mediante una historia contada a traves de un recorrido
                    por el mapa del país. 
                    </p>
                </div>
                <div className="Conte-Mapa">
                <img className="Img-Mapa" src="https://i.ibb.co/Qc4yJTL/Dise-o-sin-t-tulo-50.png" alt=""/>


              


                <Link to="/Ideologias/IntroduccionMapa/mapas" className="Boton1">  <a href=""><h1 className="Titulo-Map">VAMOS A LOS MAPAS</h1></a></Link>
                </div>


            </React.Fragment>
        );
    }
}

export default ContenidoIntroduccion;