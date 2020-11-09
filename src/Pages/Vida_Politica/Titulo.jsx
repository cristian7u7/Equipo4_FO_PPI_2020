import React from "react";
import "./style.css";
class Titulo extends React.Component {
    render() {
        return (
          
            <div >
               

           <h1 className="TituloC">POLÍTICA Y DEMOCRACIA</h1>
           <h4 className="Titulo2C">A LO LARGO DE LA VIDA</h4>

           <div className="ParrafoVida1">
           <div  className="ParrafoVida">
               <p className="Textoc">
               Cuando hablamos de "vida política", nos referimos a como
                influye y ha influido la política y la democracia a lo largo de nuestro vivir. En
                este tema estaremos viendo algunas de las etapas por las cuales pasamos por nuestra
                y cómo se ven influenciadas por los dos temas anteriormente dichos; ASI QUE VAMOS,
                ANIMATE A CONOCER MÁS.
               </p>
           </div>
           </div>
           <div className="ConteImagenVidaPoli">
                <div className="ConteImagenVidaPoli">
                    <img className="ImagenVidaPoli" src="https://i.ibb.co/zR7WKJQ/FarmTwo.png" alt=""/>
                    <img className="ImagenVidaPoli" src="https://i.ibb.co/wQ6wLnT/Farm-Two-1.png" alt=""/>
                    <img className="ImagenVidaPoli" src="https://i.ibb.co/wyWgQpC/Farm-Two-2.png" alt=""/>
                </div>
           </div>
           </div>
        );
    }
}

export default Titulo;