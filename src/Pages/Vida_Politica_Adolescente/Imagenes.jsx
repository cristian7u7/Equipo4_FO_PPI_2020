import React from "react";
import "./style4.css";
class Imagenes extends React.Component {
    render() {
        return (
          
           <div className="imagenesC">
               <div className="personero">
                   <img className="ImgC" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/bdd0aa79-f3b4-4216-a96f-6cfdf3c06f45.png" alt=""/>
                   <a  href="/Vida_Politica_Personero">PERSONERO</a>

               </div>

               <div className="contralor">
               <img className="ImgC" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/a7df3438-1194-4e01-bac9-4b4d4e8b082e.png" alt=""/>
               
               <a  href="">CONTRALOR</a>
               
               </div>
           </div>    

            
                                           
       
        );
    }
}
export default Imagenes;