import React from 'react';
import '../InicioSesion/style.css';
import { Link } from 'react-router-dom';

class  Espacios extends React.Component {
    render() {
        return (
    <body>
    <div className="body">
        
    <form>
        
        <div >
        <h1 className="tituoRegist">INICIAR SESIÓN</h1>
        </div>
        <div  class="form-group">
        <input type="text" class="form-control" placeholder="Nombre de usuario" />
        </div>
        <div class="form-group">
            <input type="password" size="20" maxlength="20" class="form-control" placeholder="Contraseña"/>
        </div>
        
    </form>

    
    <button className="loguitos" >
    <img src="https://i.ibb.co/hYmkwr2/icono-facebook.png" width="40px" />
    </button>
    
    <button className="loguitos">
    <img src="https://i.ibb.co/Kjz5Ljz/gooogle.png"  width="40px"/>
    </button> 
    
    
    
    <Link to="/inicio/Regis" className="Regis"> <div className="personalizado">
    <a className="R" href="">REGISTRARSE</a>
    </div></Link> 
   
    

    <div className="vacio"></div>
    <div class="b">
    <a class="boton_personalizado">INICIAR</a>
    </div>
    </div>
    </body>

)
    }
} 
export default Espacios; 
