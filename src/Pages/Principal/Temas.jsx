import React from "react";
import './estilo1.css';
import { Link } from 'react-router-dom';

class Temas extends React.Component{
    render(){
        return(
            <React.Fragment className="conte">
                <div className="ConteTemas">
                    <div className="Temas">
                        <Link to="/inicio/politiqueando/Vida_Politica" className="R">  <a href=""><img src="https://i.ibb.co/gzPtsPy/Dise-o-sin-t-tulo-90.png" class="image" alt="..." /></a></Link>
                        <h1 className="text">VIDA POLITICA</h1>
                        <div className="text_1">
                        <p className="parra_text"> Atrévete, conoce y aprende sobre como han influido la politica y la democracia a lo largo de cada etapa de tu vida</p>
                        </div>
                    </div>

                    <div className="Temas">
                        <Link to="/inicio/politiqueando/Vida_Politica" className="R">  <a href=""><img src="https://i.ibb.co/NFXrMvN/Dise-o-sin-t-tulo-91.png" class="image" alt="..." /></a></Link>
                        <h1 className="text">IDEOLOGIAS POLITICA</h1>
                        <div className="text_1">
                        <p className="parra_text">¿Te gustaría saber que hitos e historias han marcado a Colombia con respecto a su pensamiento politico y democratico?
                        </p>
                        </div>
                    </div>

                    <div className="Temas">
                        <Link to="/inicio/politiqueando/Vida_Politica" className="R">  <a href=""><img src="https://i.ibb.co/crdm5m0/Dise-o-sin-t-tulo-92.png" class="image" alt="..." /></a></Link>
                        <h1 className="text">EL VOTO</h1>
                        <div className="text_1">
                        <p className="parra_text">Es importante conocer las razones por las cuales debemos ejecer el voto, al igual que informarnos cómo y donde hacerlo
                        </p>
                        </div>
                    </div>
                </div>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
            </React.Fragment>
        );
    }
}

export default Temas;