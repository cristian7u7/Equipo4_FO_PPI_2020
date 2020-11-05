import React from "react";
import {Link} from 'react-router-dom';
import "./style2C.css";

class Contenido extends React.Component{
    render(){
        return (
            <div> 
                <div className="parrafo">
                    
                  
               <p className="parrafoideologias">
               Los diferentes pensamientos con relación a la política y 
               la democracia han traído grandes hitos a la historia del país, 
               en esta sección vamos a aprender las consecuencias que han traído las diferentes
                ideologías en el país por medio de una historia contada mediante un mapa y un foro en el que podrás tener interacción con demás usuarios sobre las preguntas propuestas por la plataforma
              </p>
              </div>
              <div className="contenido-ide">
              <h1 className="TituloIdeologias1">
                        ¿QUE ES UNA IDEOLOGIA POLITICA? 
                    </h1>
                    <p className="ParrafoIdeologias2">
                    Una ideología, en este sentido, es un sistema de
                     pensamiento que se compone de un conjunto de ideas 
                     o principios sobre los que se fundamenta una manera
                      particular de ver y abordar la realidad. De allí que 
                      tenga aplicación en los más diversos campos de la actividad 
                    humana, como la política, la economía, la religión o la cultura.

                 
               </p>
              

              </div>    

              <div className="ImagenesIdeologias">
                  <img  className="Imagensitas"  src="https://i.ibb.co/wcvDmv2/circle-cropped-1.png" alt="circle-cropped-1" alt=""/>
                  
                  <img className="Imagensitas" src="https://i.ibb.co/GtFLVW3/circle-cropped-3.png" alt=""/>
                  <img  className="Imagensitas"  src="https://i.ibb.co/jLSTr78/circle-cropped-4.png" alt=""/>
              </div>
            
              
        

        
              <div className="DivBotones">
               <div className="Boton_1">
               <Link to="/Ideologias/IntroduccionMapa" className="Boton1"><button className="MapasBoton">MAPAS</button></Link>
               </div>
               
               <div className="Boton_2">
               <Link to="/politiqueando/foros" className="Boton1"><button className="ForosBoton">FOROS</button></Link>
               </div>
               </div>
               
                 
                 
                 

               </div>
          
        
        );
    }
}
export default Contenido; 
