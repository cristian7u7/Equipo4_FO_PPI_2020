import React from "react";
import "./style2.css";

class Parrafo extends React.Component {
    render() {
        return (
           <div>
                <div className="Conteparrafo_"  >                                          
                <p className="parrafo_" >La política y la democracia empieza a actuar en nosotros desde muy pequeños, incluso cuando nos llaman niños. Es una etapa dónde la realidad para nosotros se nubla y no entendemos muchas cosas y solo tiempo después logramos descubrir y encontrar la razón por las que eso ha estado presente en nuestra diario vivir.
                </p>            
           </div>

           <div className="ConteparrafoNiño">
           <div className="Conteparrafo1">
                <img className="ImagenParrafoNiño" src="https://i.ibb.co/ctx0wgf/Farm-Two-8.png" alt=""/>
                <div className="conteParrafoNiños">
                <p className="parrafoNiño">
                        Eso pasa con la democracia, cuando somos niños, no tenemos tantas oportunidades de participar en votaciones y demás temas o cosas así, pero si en otras donde es vital la participación y la opinión de cada uno.
                </p>
                </div>
           </div>
           </div>

           <h1 className="tituloEj">EJEMPLOS:</h1>
            <div className="ConteEjemplos">
                <div className="conte_ejemplos">
                    <p className="Ejemplos">● Cuando podemos escoger en nuestro colegio al compañero que queremos que nos represente frente al colegio.</p>
                </div>
                <div className="conte_ejemplos">
                    <p  className="Ejemplos">● Cuando debemos hacer una decisión grupal, y cada uno vota por lo que más le gusta.</p>
                </div>
                <div className="conte_ejemplos">
                <p className="Ejemplos">● Cuando elegimos una temática o película según los gustos de cada quién.</p>
                </div>
            </div>
            <div className="ParraFi1">
            <div className="ParraFi">
            <p className="Ejemplos">
           En estos casos, aunque inconscientemente, estás practicando y entrenando para en un futuro tener un carácter y una decisión propia tan clara y fuerte que podamos elegir por nosotros mismos a un candidato.
           </p>
            </div>
            </div>

           </div>

        );
    }
}

export default Parrafo;