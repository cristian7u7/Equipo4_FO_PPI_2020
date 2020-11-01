import React from 'react';
<<<<<<< HEAD
import './styleInicio.css';
=======
>>>>>>> feature_SaraM
import { Link } from 'react-router-dom';
import '../InicioSesion/styleInicioSesion.css';

class  Espacios extends React.Component {
    render() {
        return (
    <body>
    <div className="body">
        
    <form>
        
        <div >
        <h1 className="tituoInicioSesion">INICIAR SESIÓN</h1>
        </div>
        <div  class="formulario">
        <input type="text" class="form-control" placeholder="Nombre de usuario" />
        </div>
        <div class="formulario">
            <input type="password" size="20" maxlength="20" class="form-control" placeholder="Contraseña"/>
        </div>
        
    </form>

    
    <button className="cuentasSesion" >
    <img className="imagenIcono" src="https://i.ibb.co/hYmkwr2/icono-facebook.png" width="40px" />
    </button>
    
    <button className="cuentasSesion">
    <img className="imagenIcono"src="https://i.ibb.co/Kjz5Ljz/gooogle.png"  width="40px"/>
    </button> 
    
    <Link to="/inicio/Regis" className="Regis"> <div className="personalizado1">
    <a className="registroo">¿No tienes cuenta?  REGISTRATE</a>
    </div></Link> 

    <div className="solito"></div>
    <div class="iniciar">
    <a class="personalizado">INICIAR</a>
    </div>
    </div>
    </body>

)
    }
} 
export default Espacios; 
