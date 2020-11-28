import React, {useState, useEffect, Fragment} from 'react';
import './styleInicio.css';
import { Link } from 'react-router-dom';
import '../InicioSesion/styleInicioSesion.css';
import fire from '../../config/fireBase';

function InicioSesion (){

    const [usuario, setUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [tieneCuenta, setNoTieneCuenta] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    const imputs = () => {
        setCorreo('');
        setContrasenia('')
    }
    const errors = () => {
        setEmailError('');
        setPasswordError('')
    }

    const handleLogin = () =>{
        errors();
    fire
        .auth()
        .signInWithEmailAndPassword(correo, contrasenia)
        .catch((err) =>  {
            switch (err.code){
                case'auth/invalid-email':
                case'auth/user-disable':
                case'auth/user-not-found':
                    setEmailError(err.message);
                    break;
                    case'auth/wrong-pasword':
                    setEmailError(err.message);
                    break;
                
                }
        })
           
            
        }
        const handleRegistro = () =>{
            errors();
            fire
                .auth()
                .createUserWithEmailAndPassword(correo, contrasenia)
                .catch((err) =>  {
                    switch (err.code){
                        case'auth/email-already-in-use':
                        case'auth/invalid-email':
                       
                            setEmailError(err.message);
                            break;
                            case'auth/weak-pasword':
                            setEmailError(err.message);
                            break;
                        
                        }
                })
                   
                    
        }
        const handleLogout = () => {
            fire.auth().signOut();

        }
        const authListenert = () => {
            imputs();
            fire.auth().onAuthStateChanged(usuario => {
                if (usuario){
                    setUsuario(usuario);
                }else{
                    setUsuario('')
                }
            } );

        }

        useEffect(() => {
            authListenert();
        },[])

return (
    <Fragment>
    <body>
        <div className="body">
                
            <form>
                
                <div >
                <h1 className="tituoInicioSesion">INICIAR SESIÓN</h1>
                </div>
                <div  class="formulario">
                <input type="text" class="form-control" value={correo}  placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <div class="formulario">
                    <input type="password" size="20" maxlength="20" class="form-control" value={contrasenia} placeholder="Contraseña" onChange={(e) => setContrasenia(e.target.value) }  />
                </div>
                
                <div className="btnContainer">
                    {tieneCuenta ? (
                        <>
                         <button onclick={handleLogin}  className="cuentasSesion">
                        <img className="imagenIcono"src="https://i.ibb.co/Kjz5Ljz/gooogle.png"  width="40px"/>login
                        </button>
                        <p>Tienes cuenta? <span onclick={() => setNoTieneCuenta(!tieneCuenta) } ></span></p>
                        </>
                    ): (
                    <>
                    <Link to="/inicio/Regis"><button  onclick={handleRegistro}>Registro</button></Link>
                        
                        <p>No tienes una cuenta?<span onclick={() => setNoTieneCuenta(!tieneCuenta) } >Registrate</span></p>
                        </>
                    )}
                </div>

                <div className="solito"></div>
            <div class="iniciar">
        
            
        
            <Link to="/inicio/politiqueando" className="R"><a  class="personalizado">INICIAR</a> </Link> 
            
        
            </div>

            </form>
        
{/*             
            <button className="cuentasSesion" >
            <img className="imagenIcono" src="https://i.ibb.co/hYmkwr2/icono-facebook.png" width="40px" />
            </button>
            
            <button className="cuentasSesion">
            <img className="imagenIcono"src="https://i.ibb.co/Kjz5Ljz/gooogle.png"  width="40px"/>
            </button>  */}
            
            {/* <Link to="/inicio/Regis" className="Regis"> <div className="personalizado1">
            <a className="registroo">¿No tienes cuenta?  REGISTRATE</a>
            </div></Link>  */}
        
            
        </div>
    </body>
    </Fragment>   
)

}


export default InicioSesion;

