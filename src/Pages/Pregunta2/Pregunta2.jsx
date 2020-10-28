import React from "react";
import "./estilo7.css";

class Pregunta2 extends React.Component {
    render() {
        return (
            <div>
                <div className="conte-Pregunta2">
                    <h1 className="Titulo_Principal2">FORO #2:</h1>
                    <h1 className="Sub_Principal2">¿CUAL ES TU PENSAMIENTO RESPECTO A LA INFLUENCIA</h1>
                    <h1 className="Sub_Principal2">DE LOS PARTIDOS POLITICOS EN LA SOCIEDAD?</h1>
                    <p className="Parrafo_Des2">Los partidos politicos durante la historia del pais han tomado
                    gran campo en las ideologias o maneras de pensar de las personas, y es por esto mismo, por
                    diferencia de pensamientos que se han desatado grandes conflictos como lo fue LA GUERRA DE
                    LOS MIL DIAS. ¿Como mas crees que han influido estos en nuestra sociedad, entorno mediante 
                    el desarrollo de nuestra historia y en nuestra actualidad?
                    QUE BUENO CONTAR CON TU OPINION Y TU PENSAMIENTO; COMPARTELO CON NOSOTROS.</p>
                </div>
                <p className="sub_titulo2">¡Recuerda respetar la opinion de los demás y no usar vocabulario que pueda ofender a otra persona!</p>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
                <h1 className="Titulo_Principal2">COMENTARIOS:</h1>
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
export default Pregunta2;