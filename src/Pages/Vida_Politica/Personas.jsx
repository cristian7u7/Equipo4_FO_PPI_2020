import React from "react";
import "./style.css";

class Personas extends React.Component {
    render() {
        return (
          
            <div className="card-group"  style={{width: 750, height: 260, }}>
                <div className="card">
                    <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/23490370-4c13-4006-b8dc-7929932ec0c5.png" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h4 className="card--title">NIÑO</h4>
                        <div className="boton_1">   
               
            </div>
                    </div>
                </div>  

                 <div className="card">
                    <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/8cb313d1-abb9-4085-b1c4-b069eb70d289.png" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h4 className="card--title">ADOLESCENTE</h4>
                        <div className="boton_1">                 
               <a href=""  class="btn_1 btn-default" role="button" > Ir</a>
               
            </div>

                    </div>
                </div>      

                 <div className="card">
                    <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/b218c006-0090-47cd-8647-34daed134432.png" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h4 className="card--title">ADULTO</h4>
                        <div className="boton_1">                 
               <a href=""  class="btn_1 btn-default" role="button" > Ir</a>
               
            </div>

                    </div>
                    
                </div>    
                                               
           </div>

           
        );
    }
}

export default Personas;