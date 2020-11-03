import React from "react";
import './estilo1.css';

class Temas extends React.Component{
    render(){
        return(
            <React.Fragment className="conte">
                <div className="card-deck conte">
                    <div class="card">
                        <a href=""><img src="https://i.ibb.co/6t9vPZ7/circle-cropped-1.png" class="image" alt="..." /></a>
                        <div class="card-body">
                        <h5 class="card-title text">VIDA POLÍTICA</h5>
                        <div className="text_1">
                        <p className="card-text parra_text">Atrévete, conoce y aprende sobre cómo han influido la politica y la democracia a lo largo de cada etapa de tu vida</p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <a href=""><img src="https://i.ibb.co/GH2bMHn/circle-cropped.png" class="image" alt="..."/></a>
                        <div class="card-body">
                        <h5 class="card-title text">IDEOLOGÍAS POLÍTICAS</h5>
                        <div className="text_1">
                            <p className="card-text parra_text">¿Te gustaría saber que hitos e historias han marcado a Colombia con respecto a su pensamiento político y democratico?</p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <a href=""><img src="https://i.ibb.co/5scWB14/circle-cropped-2.png" class="image" alt="..."/></a>
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