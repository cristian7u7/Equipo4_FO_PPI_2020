import React from "react";
import "./estilo4.css";

class Titulo_Nosotros extends React.Component{ 
    render(){ 
        return(
            <React.Fragment className="Fondo">
                <img className="voto-img" src="https://i.ibb.co/Mkq3b0x/Imag.png" alt=""/>
                <div className="Fondo">
                <h2 className="Titulo1 Titulo1_cop">NOSOTROS</h2>; 
                <p className="Titulo1__2 Titulo2__cop"> De seguro, muchas veces en la vida nos preguntamos el por qué deberiamos
                votar, el para qué debemos asistir a las urnas, el para qué elegir a alguien que nos represente, es 
                por eso que queremos darte algunas de las muchas razones por las cuales es de vital importancia y 
                realmente primordial ejercer nuestro derecho al voto. </p>;
                </div>

                <h2 className="Titulo1 Titulo1_int">INTEGRANTES:</h2>;

                <div className="conte-nos">
                <div className="conten-nos">
                        <img src="https://i.ibb.co/2Nh5zsD/circle-cropped-3.png" alt=""/>
                        <h2 className="Titulo1_nos">JUAN JOSE GOEZ MOSQUERA</h2>;
                    </div>
                    <div className="conten-nos">
                        <img src="https://i.ibb.co/JqWy6ZD/circle-cropped-4.png" alt=""/>
                        <h2 className="Titulo1_nos">SARA MELISSA MORALES BURITICA</h2>;
                    </div>
                    <div className="conten-nos">
                        <img src="https://i.ibb.co/nsB2VmT/circle-cropped-5.png" alt=""/>
                        <h2 className="Titulo1_nos">SARA COLORADO GIL GARCIA</h2>;
                    </div>
                    <div className="conten-nos">
                        <img src="https://i.ibb.co/p3Y1q5j/circle-cropped-6.png" alt=""/>
                        <h2 className="Titulo1_nos">CRISTIAN DAVID MARTINEZ</h2>;
                    </div>
                </div>
                <div className="Fondo1">
                <h2 className="Titulo1 Titulo1_int">OBJETIVO DE EQUIPO:</h2>;
                    <p className="Titulo2__obj">Somos los desarrolladores de Politiqueando ando y buscamos una conciencia en la
                        poblacion a cerca de la importancia del voto y la presencia de la politica y la 
                        democracia a lo laro y durante de nuestra vida. Es por eso que decidimos desarrollar 
                        este proyecto, para un beneficio comun y contribuir a la busqueda de un mejor gobierno
                        y una mayor participacion ciudadana.</p> 
                </div>
                <img className="voto-img" src="https://i.ibb.co/S7108Hn/Ima.png" alt=""/>
            </React.Fragment>
        );
    }
}

export default Titulo_Nosotros;