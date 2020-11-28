import React from "react";
import "./estilo7.css";
import axios from 'axios'
class Pregunta2 extends React.Component {
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
            
            <div>
                <div className="conte-Pregunta2">
                    <h1 className="Titulo_Principal2">FORO #2:</h1>
                    <h1 className="Sub_Principal2">¿CUAL ES TU PENSAMIENTO RESPECTO A LA INFLUENCIA</h1>
                    <h1 className="Sub_Principal2">DE LOS PARTIDOS POLITICOS EN LA SOCIEDAD?</h1>
                    <p className="Parrafo_Des2">Los partidos politicos durante la historia del pais han tomado
                    gran campo en las ideologias o maneras de pensar de las personas, y es por esto mismo, por
                    diferencia de pensamientos que se han desatado grandes conflictos como lo fue LA GUERRA DE
                    LOS MIL DIAS. ¿Como mas crees que han influido estos en nuestra sociedad, entorno mediante 
                    el desarrollo de nuestra historia y en nuestra actualidad?
                    QUE BUENO CONTAR CON TU OPINION Y TU PENSAMIENTO; COMPARTELO CON NOSOTROS.</p>
                </div>
                <p className="sub_titulo2">¡Recuerda respetar la opinion de los demás y no usar vocabulario que pueda ofender a otra persona!</p>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
                <div className="Fondo_Comentario">
                    <h1 className="Titulo_Principal">COMENTARIOS:</h1>
                    <p className="Parrafo_Comen">QUE BUENO CONTAR CON TU OPINION Y TU PENSAMIENTO; COMPARTELO CON NOSOTROS.</p>
                    
                    <form onSubmit={this.handleSubmit}  >
                    <div  className="conte-CampoComentario form-group">
                        <input type="text" className="texto_Pregunta form-control" name="descripcion" placeholder="Ingresa aquí tu comentario" onChange={this.handleChange} />
                    </div>
                    <div className="conte-BotonPublicar">
                        <button type="submit" className="BotonPublicar btn-warning_pregunta1"><p className="publicar">Publicar</p></button>
                    </div>
                    </form>

                    
                    <div className="card">
                    <div className="titulo_Respuesta card-header">
                        <img className="imagen_comentario" src="https://i.ibb.co/XZjtqY5/Logo-6.png" alt=""/>
                        <p  className="titulo_Respuesta_Letra">Usuario</p>
                    </div>
                        <div className="conte_Respuesta card-body">
                            <ul>
                            { this.state.comentarios.map(comentario => <li>{comentario.descripcion}</li>)}
                            </ul>
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
export default Pregunta2;