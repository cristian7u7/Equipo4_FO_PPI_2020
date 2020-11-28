import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './styleRegis.css';
import '../Regis/styleRegis.css';
import fetchAxios from '../../config/configAxios';
import { useState } from 'react';
import Swal from "sweetalert2";




function Registro (props){
    const [usuario, guardarUsuario]=useState({
        nombre: '',
        apellido: '',
        nombreUsuario: '',
        correo:'',
        contraseña: '',
    });

    const actualizarEstado = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
        console.log(usuario)
    }

    const agregarUsuario = (e) => {
        e.preventDefault();

        fetchAxios.post('/registrarUsuario' , usuario)
        .then(res => {
            if (res.status === 200){
                Swal.fire('Usted ha sido registrado correctamente' , res.data.mensaje, 'success')
            }
            props.history.push('/inicio/politiqueando')
        })
    } 

    const validarUsuario = () => {
        const {nombre, apellido, nombreUsuario,correo, contraseña} = usuario;
        let valido = !nombre.length || !apellido.length|| !nombreUsuario.length || !correo || !contraseña;
    }

        return (
<Fragment>

    <div className="body">
    <form onSubmit = {agregarUsuario}>
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
        <input type="text" className="form-control" id="correo" name="correo" placeholder="Correo" onChange={actualizarEstado}/>
        </div>
        <div class="form-group">
            <input type="password" size="20" maxlength="20" className="form-control" id="contraseña" name="contraseña" placeholder="Contraseña" onChange={actualizarEstado}/>
        </div>
        <div class="form-group">
            <input type="password" size="20" maxlength="20" className="form-control" id="confirmarContraseña" placeholder="Confirmar contraseña"/>
        </div>
        <button className="loguitos" >
    <img src="https://i.ibb.co/hYmkwr2/icono-facebook.png" width="40px" />
    </button>

    <button className="loguitos">
    <img src="https://i.ibb.co/Kjz5Ljz/gooogle.png"  width="40px"/>
    </button>
       <Link to="/inicio/politiqueando"> <button type='submit' value='agregarUsuario' ><a class="boton_personalizado">REGISTRARSE</a></button></Link>
    </form>


  


    {/* <div class="b">

     <Link to="/inicio" className=""><a class="boton_personalizado">REGISTRARSE</a></Link> 
       



    </div> */}
    </div>

</Fragment>
);
    }

export default Registro;