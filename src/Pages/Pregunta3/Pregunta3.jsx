import React from "react";
import "./estilo8.css";
import axios from 'axios'
class Pregunta3 extends React.Component {
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
    render() {
        return (
            <div className="Fondo_Pagina_Comentario">
                <div className="conte-Pregunta3">
                    <h1 className="Titulo_Principal3">FORO #3:</h1>
                    <h1 className="Sub_Principal3">¿POR QUÉ CONSIDERAS QUE ES IMPORTANTE</h1>
                    <h1 className="Sub_Principal3">LA PARTICIPACIÓN CIUDADANA?</h1>
                    <p className="Parrafo_Des3"> Muchos sabemos que la participación ciudadana es 
                    aquello que nos convoca a todos que como sociedad contribuyamos a un cambio, ya sea
                    social, natural, economico, entre otro. Por eso también es importante saber y conocer
                    que piensan los demás de dicho concepto y por qué consideran que es primordial y
                    realmente importante dentro de la sociedad.
                    QUE BUENO CONTAR CON TU OPINION Y TU PENSAMIENTO; COMPARTELO CON NOSOTROS.</p>
                </div>
                <p className="sub_titulo3">¡Recuerda respetar la opinion de los demás y no usar vocabulario que pueda ofender a otra persona!</p>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
                <div className="Fondo_Comentario">
                    <h1 className="Titulo_Principal">COMENTARIOS:</h1>
                    <p className="Parrafo_Comen">QUE BUENO CONTAR CON TU OPINION Y TU PENSAMIENTO; COMPARTELO CON NOSOTROS.</p>
                   
                   <form action="">
                    <div  className="conte-CampoComentario form-group">
                        <input type="text" className="texto_Pregunta form-control" placeholder="Ingresa aquí tu comentario"/>
                    </div>
                    <div className="conte-BotonPublicar">
                        <button type="button_pregunta" className="BotonPublicar btn-warning_pregunta1"><p className="publicar">Publicar</p></button>
                    </div>
                    </form >
                    <div className="card">
                    <div className="titulo_Respuesta card-header">
                        <img className="imagen_comentario" src="https://i.ibb.co/XZjtqY5/Logo-6.png" alt=""/>
                        <p  className="titulo_Respuesta_Letra">Usuario</p>
                    </div>
                        <div className="conte_Respuesta card-body">
                            <blockquote className="blockquote mb-0">
                            <p className="parrafo_Respuesta_Letra">Descripción de los comentarios.</p>
                            <footer className="parrafo_Respuesta_Letra blockquote-footer">Fecha de los comentarios<cite title="Source Title"></cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Pregunta3;