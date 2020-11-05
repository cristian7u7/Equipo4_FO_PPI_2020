import React from "react";
import './estilo1.css';
import { Link } from 'react-router-dom';

class Temas extends React.Component{
    render(){
        return(
            <React.Fragment className="conte">
                <div className="card-deck conte">
                    <div class="card">

                    <Link to="/inicio/politiqueando/Vida_Politica" className="R">  <a href=""><img src="https://i.ibb.co/6t9vPZ7/circle-cropped-1.png" class="image" alt="..." /></a></Link>  
                        <div class="card-body">
                        <h5 class="card-title text">VIDA POLÍTICA</h5>
                        <div className="text_1">
                        <p className="card-text parra_text">Atrévete, conoce y aprende sobre cómo han influido la politica y la democracia a lo largo de cada etapa de tu vida</p>
                        </div>
                        </div>
                    </div>

                    
                    <div class="card">
                    <Link to="/inicio/politiqueando/Ideologias" className="R">  <a href=""><img src="https://i.ibb.co/GH2bMHn/circle-cropped.png" class="image" alt="..."/></a> </Link>
                        <div class="card-body">
                        <h5 class="card-title text">IDEOLOGÍAS POLÍTICAS</h5>
                        <div className="text_1">
                            <p className="card-text parra_text">¿Te gustaría saber que hitos e historias han marcado a Colombia con respecto a su pensamiento político y democratico?</p>
                        </div>
                        </div>

                    </div>

                    <div class="card">
                    <Link to="/politiqueando/Voto" className="R"> <a href=""><img src="https://i.ibb.co/5scWB14/circle-cropped-2.png" class="image" alt="..."/></a></Link>
                        <div class="card-body">
                        <h5 class="card-title text">EL VOTO</h5>
                        <div className="text_1">
                        <p className="card-text parra_text">Es importante conocer las razones por las cuales debemos ejercer el voto, al igual que informarnos cómo y dónde hacerlo</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
            </React.Fragment>
        );
    }
}

export default Temas;