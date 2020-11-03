import React from "react";
import {Link} from 'react-router-dom';
import "./estilo5.css";

class Foros1 extends React.Component{
    render(){
        return (
            <React.Fragment>
                <img className="voto-img" src="https://i.ibb.co/3zZjzJP/r5rr7r.png" alt=""/>
                <div className="vacio">POLITIQUEANDO ANDO - 2020</div>
                <div>
                <h1 className="Titulo-Mapa1">FOROS</h1>
                    <h2 className="Titulo-Mapa2">¡UNA OPORTUNIDAD PARA PARTICIPAR!</h2>;
                    <p className="Titulo-Par">Muchas veces pensamos cosas de algun tema, o controversia que pasa
                    y dejamos pasar eso desapercivido. Este espacio es para que puedas expresar lo que pienses respecto
                    a los diferentes temas que emos propuesto para ti, para que des y recibas tambien opiniones de los 
                    demas, siempre y cuando todo empiece con el RESPETO. 
                    </p>
                </div>
                <div className="conte-img-foros">
                    <img className="img-foros" src="https://i.ibb.co/DksDCtD/circle-cropped-7.png" alt=""/>
                    <img className="img-foros" src="https://i.ibb.co/gDc346m/circle-cropped-8.png" alt=""/>
                    <img className="img-foros" src="https://i.ibb.co/s3NJsTt/circle-cropped-9.png" alt=""/>
                </div>
                <div className="conte-parti">
                <h1 className="Titulo-Mapa1">¿POR QUE ES IMPORTANTE</h1>
                    <h2 className="Titulo-Mapa2">LA PARTICIPACION CIUDADANA?</h2>;
                    <p className="Titulo-Par">La participación ciudadana es de gran importancia porque se comparten 
                    responsabilidades al tomar decisiones, al actuar día a día, y esto no se puede hacer de manera individual,
                     se debe de tomar en cuenta un trabajo colectivo.

                        Individualmente, la participación ciudadana es respetar las opiniones de los demás, y ejercer 
                        nuestros derechos y obligaciones adecuadamente, porque si todos hacemos bien las cosas, estamos
                         más organizados y llegamos a más acuerdos. 
                    </p>
                </div>
                <h1 className="Titulo-Mapa1">FOROS ACTIVOS:</h1>
                <div className="cont_Foros">
                <div className="entre_Foros" STYLE=" top:300px; left:400px;" class="card_Foros-body">
                    <div class="entre_Foros card_Foros-body">
                        <Link to="/Ideologias/mapas/mapa2/mapa3/foros/pregunta1" className="card-text_Foros"><p class="card-text_Foros">¿Por qué son importantes las ideologias?</p></Link>
                    </div>
                </div>
                <div className="entre_Foros" STYLE=" top:500px; left:400px;" class="card_Foros-body">
                    <div class="entre_Foros card_Foros-body">
                    <Link to="/Ideologias/mapas/mapa2/mapa3/foros/pregunta1" className="card-text_Foros"><p class="card-text_Foros">¿Con que ideal politico estas de acuerdo?</p></Link>
                    </div>
                </div>
                <div className="entre_Foros" STYLE=" top:700px; left:400px; " class="card_Foros-body">
                <div class="entre_Foros card_Foros-body">
                <p class="card-text_Foros">¿Que opinas de las consecuencias causadas por las ideologias politicas?</p>
                </div>
    
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Foros1;