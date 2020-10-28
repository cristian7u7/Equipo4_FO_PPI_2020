import React from "react";
import "./estilo3.css";

class Titulo_PVoto extends React.Component{
    render(){
        return(
            <div>
                <img className="image_voto" src="https://i.ibb.co/hsKqNpp/Temas-1.png" alt=""/>
                <h1 className="Titulo1__1">EL VOTO</h1>
                <h2 className="Titulo1">¿POR QUÉ VOTAR?</h2>
                <p className="Titulo1__2"> De seguro, muchas veces en la vida nos preguntamos el por qué deberiamos
                votar, el para qué debemos asistir a las urnas, el para qué elegir a alguien que nos represente, es 
                por eso que queremos darte algunas de las muchas razones por las cuales es de vital importancia y 
                realmente primordial ejercer nuestro derecho al voto. </p>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
            </div>
        );
    }
}

export default Titulo_PVoto;