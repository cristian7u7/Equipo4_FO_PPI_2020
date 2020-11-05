import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

class FlechasDeber extends React.Component {
    render() {
        return (
            <div className="card-group_flecha1"  style={{width: 1250, height: 260, }}>
            <div className="card_1">
                
                <div className="card-body_f">
                    
                    <div className="boton_flechas">    

                <Link to="/inicio/ComoVotar/" className="R"> <a href=""  class="btn_2 btn-default" role="button" > <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/5949886c-b431-4ca5-8735-77a0ea779f34.png" alt=""/></a> </Link>                 

        </div>
                </div>
            </div>  
            <div className="card_1">
                
                <div className="card-body_f">
                    
                    <div className="boton_flechas">  
                    <Link to="/inicio/ComoVotar/nodeber" className="R"> <a href=""  class="btn_2 btn-default" role="button" > <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/35ae1024-15b5-4fc7-bde6-f8570dc9fd99.png" alt=""/></a></Link>               

        </div>
                </div>
            </div>                                                  
            </div>                                                     
        );
    }
}
export default FlechasDeber;