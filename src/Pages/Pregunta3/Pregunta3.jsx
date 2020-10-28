import React from "react";
import "./estilo8.css";

class Pregunta3 extends React.Component {
    render() {
        return (
            <div>
                <div className="conte-Pregunta3">
                    <h1 className="Titulo_Principal3">FORO #3:</h1>
                    <h1 className="Sub_Principal3">¿POR QUÉ CONSIDERAS QUE ES IMPORTANTE</h1>
                    <h1 className="Sub_Principal3">LA PARTICIPACIÓN CIUDADANA?</h1>
                    <p className="Parrafo_Des3"> Muchos sabemos que la participación ciudadana es 
                    aquello que nos convoca a todos que como sociedad contribuyamos a un cambio, ya sea
                    social, natural, economico, entre otro. Por eso también es importante saber y conocer
                    que piensan los demás de dicho concepto y por qué consideran que es primordial y
                    realmente importante dentro de la sociedad.
                    QUE BUENO CONTAR CON TU OPINION Y TU PENSAMIENTO; COMPARTELO CON NOSOTROS.</p>
                </div>
                <p className="sub_titulo3">¡Recuerda respetar la opinion de los demás y no usar vocabulario que pueda ofender a otra persona!</p>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
                <h1 className="Titulo_Principal3">COMENTARIOS:</h1>
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
export default Pregunta3;