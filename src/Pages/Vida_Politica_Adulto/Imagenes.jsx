import React from "react";
import "./style5.css";
class Imagenes extends React.Component {
    render() {
        return (
            <div className="card-groupA"  style={{width: 550, height: 260, }}>
            <div className="cardA">
                <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/c3e25128-dc30-4596-addb-fc7d58a6281b.png" className="card-img-top" alt=""/>
                <div className="card-bodyA">
                    <h4 className="card--titleA">PRESIDENTE</h4>
                    

                </div>
            </div>  

             <div className="cardA">
                <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/aa70c51f-fd74-45ce-9751-a09f942d6b24.png" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h4 className="card--title">ALCALDE</h4>
                    

                </div>
            </div>      

             <div className="cardA">
                <img src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/2c1501b7-a02c-4115-bd39-101f6e2aa99b.png" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h4 className="card--titleA">GOBERNADOR</h4>
                    

                </div>
                
            </div>    
                                           
       </div>
        );
    }
}
export default Imagenes;