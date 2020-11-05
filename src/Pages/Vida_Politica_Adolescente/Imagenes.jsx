import React from "react";
import "./style4.css";
import { Link } from 'react-router-dom';

class Imagenes extends React.Component {
    render() {
        return (
          
           <div className="imagenesC">
               <div className="personero">

               <Link to="/inicio/politiqueando/Vida_Politica/Vida_Politica_Personero" className="R">   <a  href=""><img className="ImgC" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/bdd0aa79-f3b4-4216-a96f-6cfdf3c06f45.png" alt=""/></a> </Link>
                

               </div>

               <div className="contralor">
               <Link to="/inicio/politiqueando/Vida_Politica/Vida_Politica_Contralor" className="R"><a  href="/Vida_Politica_Contralor"><img className="ImgC" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/a7df3438-1194-4e01-bac9-4b4d4e8b082e.png" alt=""/></a></Link>
               
               
               </div>
           </div>
        );
    }
}
export default Imagenes;