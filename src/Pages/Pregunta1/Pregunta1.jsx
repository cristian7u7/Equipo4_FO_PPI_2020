import React from "react";
import "./estilo6.css";

class ContenidoPregunta1 extends React.Component {
    render() {
        return (
            <div>
                <div className="conte-Pregunta1">
                    <h1 className="Titulo_Principal">FORO #1:</h1>
                    <h1 className="Sub_Principal">¿QUE OPINAS DE LAS MEDIDAS DE LOS GOBIERNOS</h1>
                    <h1 className="Sub_Principal">DURANTE LA PANDEMIA?</h1>
                    <p className="Parrafo_Des">Durante la pandemia, los diferentes gobiernos han tomado medidas para recuperar y 
                    lograr salvar su economia, su turismo, sus bienes, entre otros; sin olvidar que debemos de cuidarnos en todo
                    momento. Pero que opinas respecto a dichas medidas y a cerca de las decisiones que ha tomado cada gobierno.
                    QUE BUENO CONTAR CON TU OPINION Y TU PENSAMIENTO; COMPARTELO CON NOSOTROS.</p>
                </div>
                <p className="sub_titulo">¡Recuerda respetar la opinion de los demás y no usar vocabulario que pueda ofender a otra persona!</p>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
                <h1 className="Titulo_Principal">COMENTARIOS:</h1>
                <div>
                    <div  class="form-group">
                        <input type="text" class="texto_Pregunta form-control" placeholder="Ingresa aquí tu comentario"/>
                    </div>
                </div>
                <div className="conte-btn">
                    <button type="button_pregunta" className="btn btn-warning_pregunta1"><p className="publicar">Publicar</p></button>
                </div>
            </div>
        );
    }
}
export default ContenidoPregunta1;