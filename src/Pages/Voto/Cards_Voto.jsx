import React from "react";
import "./estilo2.css";
import { Link } from 'react-router-dom';

class Cards_Voto extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div class="card-group">
                    <div class="card">


                    <Link to="/politiqueando/Voto/Razones" className="R"><a href=""><img  src="https://i.ibb.co/X3DRPn9/PQVOTAR.png" class="imagen_voto" alt="..."/></a></Link>
                        

                        <div class="card-body">
                        <h5 class="card-title text">¿POR QUÉ VOTAR?</h5>
                        <p class="card-text text__1">En esta sección aparecerán razones importantes 
                        por las cuales votar en elecciones de cualquier tipo y encontrarás videos
                         animados que te ayudarán a infórmarte de por qué votar.</p>
                        <p class="card-text"><small class="text-muted">POLITIQUEANDO ANDO</small></p>
                        </div>
                    </div>
                    <div class="card">
                    <Link to="/inicio/ComoVotar" className="R"> <a href=""><img  src="https://i.ibb.co/XxmmzCN/DVOTAR.png" class="imagen_voto"  alt="..."/></a> </Link>
                       

                        <div class="card-body">
                        <h5 class="card-title text">¿CÓMO VOTAR?</h5>
                        <p class="card-text text__1">En esta parte de la plataforma vamos a mostarte las
                         razones de la abstención y las instrucciones o pasos que debes o no deberías hacer a la hora de votar.</p>
                        <p class="card-text"><small class="text-muted">POLITIQUEANDO ANDO</small></p>
                        </div>
                    </div>
                    <div class="card">
                    <Link to="" className="R"><a href=""><img   src="https://i.ibb.co/kDkF7gh/CVOTAR.png" class="imagen_voto" alt="..."/></a></Link>
                        

                        <div class="card-body">
                        <h5 class="card-title text">¿DÓNDE VOTAR?</h5>
                        <p class="card-text text__1">Te mostraremos los lugares en los que debes ir a votar el día de las elecciones, como buscar tu puesto de votación desde la página de la registraduría</p>
                        <p class="card-text"><small class="text-muted">POLITIQUEANDO ANDO</small></p>
                        </div>
                    </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default Cards_Voto;