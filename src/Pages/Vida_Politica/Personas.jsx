import React from "react";
import "./style.css";

class Personas extends React.Component {
    render() {
        return (
          
            <div className="card-group"  style={{width: 750, height: 260, }}>
                <div className="card">
                    <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/adad8989-6724-4118-8a3d-a84cb761a6b4.png" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h4 className="card--title">NIÑO</h4>
                        <div className="boton_1">                 
               <a href="/Vida_Politica_Niño"  class="btn_1 btn-default" role="button" > Ir</a>
               <h1 className="vacio"></h1>
            </div>
                    </div>
                </div>  

                 <div className="card">
                    <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/6998bd53-f5e9-46a1-b71b-067dd2d9d859.png" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h4 className="card--title">ADOLESCENTE</h4>
                        <div className="boton_1">                 
               <a href="/Vida_Politica_Adolescente"  class="btn_1 btn-default" role="button" > Ir</a>
               <h1 className="vacio"></h1>
            </div>

                    </div>
                </div>      

                 <div className="card">
                    <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/f0ed86f5-81b1-4fe3-bda9-30af089f975e.png" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h4 className="card--title">ADULTO</h4>
                        <div className="boton_1">                 
               <a href="/Vida_Politica_Adulto"  class="btn_1 btn-default" role="button" > Ir</a>
               <h1 className="vacio"></h1>
            </div>

                    </div>
                    
                </div>    
                                               
           </div>

           
        );
    }
}

export default Personas;