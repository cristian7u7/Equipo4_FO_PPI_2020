import React from "react";
import "./style4.css";
class Imagenes extends React.Component {
    render() {
        return (
          
            <div className="card_group"  style={{width: 550, height: 90, }}>
            <div className="card_">
                <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/92cc7cb7-2bd5-46ae-aa59-dccc0587b56f.png" className="card-img-top" alt=""/>
                <div className="card_body">
                    <h4 className="card_title">PERSONERO</h4>
                    

                </div>
            </div>  

             <div className="card">
                <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/40d1be02-70ae-40fc-911d-edddcbd5dfe1.png" className="card-img-top" alt=""/>
                <div className="card_body">
                    <h4 className="card_title">CONTRALOR</h4>
                    

                </div>
                <h1 className="vacio"></h1>
            </div>      

            
                                           
       </div>
        );
    }
}
export default Imagenes;