import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './styleRegis.css';
import '../Regis/styleRegis.css';
import fetchAxios from '../../config/configAxios';
import { useState } from 'react';





function Registro ({history}){
    const [usuario, guardarUsuario]=useState({
        nombre: '',
        apellido: '',
        nombreUsuario: '',
        contraseña: '',
    });

    const actualizarEstado = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
        console.log(usuario)
    }

   /*  const agregarUsuario = (e) => {
        e.preventDefault();

        fetchAxios.post()
    } */

    const validarUsuario = () => {
        const {nombre, apellido, nombreUsuario, contraseña} = usuario;
        let valido = !nombre.length || !apellido.length|| !nombreUsuario.length || !contraseña;
    }

        return (
<Fragment>

    <div className="body">
    <form >
        <div >
            <h1 className="tituoRegist">REGISTRO</h1>
        </div>

            <div className="form-group">
                <input type="text"className="form-control form-control-user" id="nombre" name="nombre"  placeholder="Nombre" onChange={actualizarEstado}></input>
            </div>
            <div className="form-group">
                <input type="text"className="form-control form-control-user" id="apellido" name="apellido" placeholder="Apellido"onChange={actualizarEstado}></input>
            </div>



        <div class="form-group">
        <input type="text" className="form-control" id="nombreUsuario" name="nombreUsuario" placeholder="Nombre de usuario" onChange={actualizarEstado}/>
        </div>
        <div class="form-group">
            <input type="password" size="20" maxlength="20" className="form-control" id="contraseña" name="contraseña" placeholder="Contraseña" onChange={actualizarEstado}/>
        </div>
        <div class="form-group">
            <input type="password" size="20" maxlength="20" className="form-control" id="confirmarContraseña" placeholder="Confirmar contraseña"/>
        </div>
    </form>


    <button className="loguitos" >
    <img src="https://i.ibb.co/hYmkwr2/icono-facebook.png" width="40px" />
    </button>

    <button className="loguitos">
    <img src="https://i.ibb.co/Kjz5Ljz/gooogle.png"  width="40px"/>
    </button>


    <div class="b">

    <Link to="/inicio" className=""><a class="boton_personalizado">REGISTRARSE</a></Link>




    </div>
    </div>

</Fragment>
);
    }

export default Registro;