import React from "react";
import "./estilo2.css";

class Titulo_Votos extends React.Component{
    render(){
        return(
            <React.Fragment>
                <img className="voto-img" src="https://i.ibb.co/9gkpxs3/Temas-2.png" alt=""/>
                <div className="voto-title">
                    <h1 className="Titulo1">EL VOTO</h1>
                    <p className="Titulo1__2">Con el paso del tiempo la población cada vez pierde más su interés por realizar
                        el voto y ejercer su participación política y democratica. Por eso nosotros
                        queremos que al poder estar más informados podamos tener más conciencia y retomemos
                        nuestro gusto y ganas por ir a votar. Por eso tenemos diversos factores que te podrían
                        interesar.
                    </p>
                </div>
            </React.Fragment>
        );
    }
}

export default Titulo_Votos;