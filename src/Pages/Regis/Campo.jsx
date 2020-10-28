import React from 'react';
import { Link } from 'react-router-dom';

class Body extends React.Component {
    render() {
        return (
    <body>
    <div className="body">
    <form>
        <div >
            <h1 className="tituoRegist">REGISTRO</h1>
        </div>
        <div  class="form-group">
        <input type="text" class="form-control" placeholder="Nombre de usuario" />
        </div>
        <div class="form-group">
            <input type="password" size="20" maxlength="20" class="form-control" placeholder="Contraseña"/>
        </div>
        <div class="form-group">
            <input type="password" size="20" maxlength="20" class="form-control" placeholder="Confirmar contraseña"/>
        </div>
    </form>

    
    <button className="loguitos" >
    <img src="https://i.ibb.co/hYmkwr2/icono-facebook.png" width="40px" />
    </button>
    
    <button className="loguitos">
    <img src="https://i.ibb.co/Kjz5Ljz/gooogle.png"  width="40px"/>
    </button> 
    
    <div className="vacio"></div>
    <div class="b">

    <Link to="/inicio" className=""><a class="boton_personalizado">REGISTRARSE</a></Link> 
    
    


    </div>
    </div>
    </body>

);
    }
} 
export default Body; 