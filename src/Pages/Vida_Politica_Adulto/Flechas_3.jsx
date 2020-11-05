import React from "react";
import "./style5.css";
import { Link } from 'react-router-dom';

class Flechas_3 extends React.Component {
    render() {
        return (
            <div className="card_group_flecha4"  style={{width: 1250, height: 150, }}>
            <div className="card_3">
                
                <div className="card-body__f3">
                    
                    <div className="boton_flechas3 justify-content-md-start">  

                <Link to="/inicio/politiqueando/Vida_Politica" className="R"><a href=""  class="btn_4 btn-default" role="button" > <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/5949886c-b431-4ca5-8735-77a0ea779f34.png" alt=""/></a></Link>                     
           
          
        </div>
                </div>
            </div>  
             <div className="card_3">
                
                <div className="card-body__f3">
                    
                    <div className=" boton_flechas_3 justify-content-md-end">                 

                    <Link to="/inicio/politiqueando/Vida_Politica/Vida_Politica_Pregunta" className="R"> <a href=""  class="btn_4 btn-default" role="button" > <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/35ae1024-15b5-4fc7-bde6-f8570dc9fd99.png" alt=""/></a></Link>
          
           
        </div>
                </div>
            </div>                                                  
            </div>                                                     
        );
    }
}
export default Flechas_3;