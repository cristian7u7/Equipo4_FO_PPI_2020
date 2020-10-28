import React from "react";
import "./style2.css";

class Titulo extends React.Component {
    render() {
        return (                                
            <div className="card-group"  style={{width: 450, height:300, }}>
                <div className="card">
                    <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/adad8989-6724-4118-8a3d-a84cb761a6b4.png" className="card-img-top" alt="" />

                    </div>
                 <div className="card-text">
                    
                    <div className="card-body">
                        <h1 className="card-title">NIÑO</h1>
                    </div>
                </div>      
                                                                                      
           </div>
        );
    }
}

export default Titulo;