import React from "react";
import "./style3.css";

class Imagen extends React.Component {
    render() {
        return (
            <div className="CirculoColegio">
            <img className="Imagen1Colegio" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/8b3c0ddd-ec79-44dd-ac68-eea25787a098.png" alt=""/>
            <img className="Imagen2Colegio" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/a16c0e71-125f-49c8-9358-383de95a4ac3.png" alt=""/>
            <img className="Imagen3Colegio" src="https://mcusercontent.com/338fe1d94f4de7f756608827c/images/ba0b167d-016c-406e-9d87-c80aa44179d8.png" alt=""/>
            </div>
        );
    }
}

export default Imagen;