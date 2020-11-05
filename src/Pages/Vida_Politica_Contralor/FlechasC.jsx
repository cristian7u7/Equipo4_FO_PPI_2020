import React from "react";
import "./stylec2.css";
import { Link } from 'react-router-dom';
class FlechasC extends React.Component {
    render() {
        return (
            <div className="card_group_flecha2"  style={{width: 1250, height: 150, }}>
            <div className="card_2">
                
                <div className="card-body__f">
                    
                    <div className="boton_flechas2">   
                    <Link to="/inicio/politiqueando/Vida_Politica" className="R">  <a href=""  class="btn_3 btn-default" role="button" > <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/5949886c-b431-4ca5-8735-77a0ea779f34.png" alt=""/></a> </Link>             
         
           
        </div>
                </div>
            </div>  
             <div className="card_1">
                
                <div className="card-body__f">
                    
                    
                </div>
            </div>                                                  
            </div>     
        );
    }
}

export default FlechasC;