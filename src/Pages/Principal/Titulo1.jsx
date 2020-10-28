import React from "react";
import './estilo1.css';


class Titulo1 extends React.Component{
    render(){
        return(
            <div className="contenedor">
                <div className="contenedor__body">
                <h1 className="Titulo1__1">BIENVENID@ A:</h1>
                <h2 className="Titulo1">POLITIQUEANDO ANDO</h2>
                <p className="Titulo1__2">Juntos aprenderemos sobre diferetes temas, podremos interactuar mediante foros y por supuesto estaremos más informados
                    sobre el voto y las diferentes preguntas que nosotros planteamos. Así que vamos, ¡APRENDAMOS JUNTOS!, y veamos la
                    política de una manera más didáctica y sencilla. </p>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
                </div>
            </div>
        );
    }
}

export default Titulo1;