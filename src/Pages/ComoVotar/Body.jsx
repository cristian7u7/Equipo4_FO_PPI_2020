import React from 'react';
import './style.css';


class Body extends React.Component {
    render() {
        return (
    
    <div className="imagenVotar">
    <img className="urna" src="https://i.ibb.co/FzgVspn/urna.png" ></img>
        <p className="textIntroduccion">Una de las razones por la cual existe la abstención politica en 
        Colombia es porque muchas de las personas no están informadas
        de la manera correcta de como votar,ni dónde hacerlo.
        Esto se convierte en un gran problema  ya que al haber 
        votos nulos o personas que no vayan a votar, esto hace
        que las crifras crezcan cada vez más. </p>
        
    </div>
    
        )
    }
}
export default Body;