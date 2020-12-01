import React, { Fragment, useState, useEffect} from "react";
import "./estilo6.css";
import Swal from "sweetalert2";
import fetchAxios from '../../config/configAxios';
import axios from 'axios'

class Pregunta1 extends React.Component {
  state = {
    descripcion: '',
    comentarios:[]
  }
handleChange = event => {
    this.setState({ descripcion: event.target.value });
    console.log(this.state)
  }
handleSubmit = event => {
    event.preventDefault();


axios.post(`http://localhost:3000/agregarComentario`,{descripcion:this.state.descripcion})
   .then(res => {
   console.log(res);
    console.log(res.data);
   })
   .catch((err) => console.log(err.message))
}

componentDidMount() {
axios.get(`http://localhost:3000/obtenerComentarios`)
  .then(res => {
    const comentarios = res.data;
    this.setState({ comentarios });
  })
}
render(){
return (
  
    <div className="Fondo_Pagina_Comentario">
        <div className="conte-Pregunta1">
            <h1 className="Titulo_Principal">FORO #1:</h1>
            <h1 className="Sub_Principal">¿QUE OPINAS DE LAS MEDIDAS DE LOS GOBIERNOS</h1>
            <h1 className="Sub_Principal">DURANTE LA PANDEMIA?</h1>
            <p className="Parrafo_Des">Durante la pandemia, los diferentes gobiernos han tomado medidas para recuperar y 
            lograr salvar su economia, su turismo, sus bienes, entre otros; sin olvidar que debemos de cuidarnos en todo
            momento. Pero que opinas respecto a dichas medidas y a cerca de las decisiones que ha tomado cada gobierno.</p>
        </div>
        <p className="sub_titulo">¡Recuerda respetar la opinion de los demás y no usar vocabulario que pueda ofender a otra persona!</p>
        <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
        <div className="Fondo_Comentario">
            <h1 className="Titulo_Principal">COMENTARIOS:</h1>
            <p className="Parrafo_Comen">QUE BUENO CONTAR CON TU OPINION Y TU PENSAMIENTO; COMPARTELO CON NOSOTROS.</p>
            
             {/* Ingresa el comentario */}
            <form onSubmit={this.handleSubmit}>
            <div  className="conte-CampoComentario form-group">
                <input type="text" className="texto_Pregunta form-control" id="descripcion" name="descripcion" placeholder="Ingresa aquí tu comentario" onChange={this.handleChange}/>
            </div>
            <div className="conte-BotonPublicar">
                <button type="submit" className="BotonPublicar btn-warning_pregunta1"><p className="publicar">Publicar</p></button>
            </div>
            </form>

            {/* Recibe el comentario */}
            
            <div>  
            { this.state.comentarios.map(comentario =>
            <div className="card">
            <div className="titulo_Respuesta card-header">
                <img className="imagen_comentario" src="https://i.ibb.co/XZjtqY5/Logo-6.png" alt=""/>
                
                <p  className="titulo_Respuesta_Letra">Usuario</p>
            </div>
                <div className="conte_Respuesta card-body">
                            
                        
                        
                    <blockquote className="blockquote mb-0">
                    <p className="parrafo_Respuesta_Letra">{comentario.descripcion}</p>
                    <footer className="parrafo_Respuesta_Letra blockquote-footer">{comentario.creado}<cite title="Source Title"></cite></footer>
                    </blockquote>
                    
                </div>
            </div>
            )}
            </div>
        </div>
        
    </div>
    
);

}
}

export default Pregunta1;