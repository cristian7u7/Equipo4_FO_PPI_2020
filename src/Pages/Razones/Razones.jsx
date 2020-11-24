import React from "react";
import "./estilo3.css";

class Razones extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ul className="lista">
                    <li className="lista__items">
                        <div className="lista__contenedor">
                            <h1 className="lista__titulo1">#1</h1>
                            <h2 className="lista__titulo2">TU VOTO CUENTA Y PUEDE HACER LA DIFERENCIA:</h2>
                            <p className="lista__parrafo">Cada voto es importante en cualquier votación. Tu voto puede hacer la diferencia en una elección y 
                                aunque para ti y mcuhas personas pueda parecer mínimo e insignificante, muestra una tendencia y
                                 expresa una opinión.</p>
                            <img src="" alt=""/>
                        </div>
                    </li>
                    <li className="lista__items">
                        <div className="lista__contenedor">
                            <h1 className="lista__titulo1">#2</h1>
                            <h2 className="lista__titulo2">TU VOTO PARA ELEGIR A QUIEN TE REPRESENTA:</h2>
                            <p className="lista__parrafo">Si nosotros somos conscientes de la importancia de nuestro voto sabremos votar por representantes 
                            en los que confiemos o en los que, al menos, veamos valores y principios que nos representen y que creamos
                            que puede generar un cambio impactante y bueno para el entorno en el que estemos escogiendo.</p>
                            <img src="" alt=""/>
                        </div>
                    </li>
                    <li className="lista__items">
                        <div className="lista__contenedor">
                            <h1 className="lista__titulo1">#3</h1>
                            <h2 className="lista__titulo2">TU VOTO ES TU VOZ:</h2>
                            <p className="lista__parrafo">Votar es una de las formas de participación democrática básica. 
                            Votando se eligen los representantes que dirigen los futuros de nuestro territorio y, en cierto
                             sentido, de nuestra vida en esos territorios.</p>
                            <img src="" alt=""/>
                        </div>
                    </li>
                    <li className="lista__items">
                        <div className="lista__contenedor">
                            <h1 className="lista__titulo1">#4</h1>
                            <h2 className="lista__titulo2">TU VOTO ES UN DERECHO:</h2>
                            <p className="lista__parrafo">En muchos países ni siquiera existe la posibilidad de 
                            votar para elegir gobernantes, los cuales son descendientes de castas tradicionales, 
                            familias monárquicas o dictadores autonombrados. La vida democrática nos permite elegir
                             nuestros representantes y delegar las funciones públicas, que son un servicio para 
                             la sociedad, en personas destacadas por sus capacidades y esfuerzos por construir un 
                             mejor entorno común.</p>
                            <img src="" alt=""/>
                        </div>
                    </li>
                </ul>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>

                <h1 className="tituloImportancia">¿POR QUÉ ES IMPORTANTE VOTAR?</h1>

                <div className="VideoRazones">
                <iframe width="660" height="415" src="https://www.youtube.com/embed/2AtYAPdQoG0"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
                </div>
            </React.Fragment>
        );
    }
}

export default Razones;