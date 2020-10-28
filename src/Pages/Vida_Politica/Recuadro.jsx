import React from "react";
import "./style.css";

class Recuadro extends React.Component {
    render() {
        return (
          
            <div className="card"  style={{width: 750, height: 260, }}>
               
              <div className="card-body">
                  <img className="imagen" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/e27b1689-dd63-4aa3-8b02-0f4cf3d923b5.png" 
                   />
                  <h4>Los aspectos políticos y democráticos se presentan en
            nuestra vida desde que estamos muy pequeños, y cuando vamos creciendo, vamos aprendiendo
            más y más  acerca de estas etapas.</h4>
              </div>    
           </div>

           
        );
    }
}

export default Recuadro;