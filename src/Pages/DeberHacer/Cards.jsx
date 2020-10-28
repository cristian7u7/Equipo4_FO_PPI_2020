import React from "react";
import "./style.css";

class cards extends React.Component {
    render() {
        return (

            <body>
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                            <div class="card">
                                <img class="card-img-top" src="https://i.ibb.co/H2FH7r4/votico.png" />
                                <div class="card-body">
                                    <h4 class="card-title">Verifique su puesto de votación</h4>
                                    <p class="card-text"> Como ciudadano, puedes consultar la dirección exacta de su puesto de votación en la página Web de la Registraduría Nacional.</p>
                                    <a href="https://www.registraduria.gov.co/consulte-su-lugar-de-votacion,11710.html" class="btn btn-primary">Consultar</a>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-md">
                            <div class="card">
                                <div class="card-body">
                                <img class="card-img-bottom" src="https://i.ibb.co/sFFVvgH/Imagen2.png" />
                                    <h4 class="card-title">Recuerde el horario de votación</h4>
                                    <p class="card-text">Las mesas de votación instaladas para las elecciones, estarán habilitadas entre las
                                    8:00 a.m y las 4:00 p.m.Los ciudadanos que a las 4:00 pm se encuentren en la fila no podrán votar.</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-md">
                            <div class="card">
                                <div class="card-body">
                                <img class="card-img-bottom" src="https://i.ibb.co/5vSYDJt/Imagen8.png"/>
                                    <h4 class="card-title">Marque con claridad su voto </h4>
                                    <p class="card-text">La persona debe solicitar al jurado de votación la tarjeta electoral.            
                                    Una vez el ciudadano tiene la tarjeta electoral en la mano, debe dirigirse al cubículo y diligenciar el voto.
                                    </p>
                                </div>
                                </div>
                                </div>

                                <div class="col-md">
                            <div class="card">
                                <div class="card-body">
                                <img class="card-img-bottom" src="https://i.ibb.co/80wNbcQ/Imagen6.png" />
                                    <h4 class="card-title">Deposite su voto </h4>
                                    <p class="card-text">Ingrece tú voto en la urna indicada, luego el jurado te devolverá
                                    su cédula de ciudadanía. y recibirás el certificado electoral, el cual le trae varios beneficios.
                                    </p>
                                    <a href="https://wsr.registraduria.gov.co/Que-beneficios-otorga-el,22135.html" class="btn btn-primary">Beneficios</a>
                                </div>
                                </div>
                                </div>
                                


                                

                    </div>
                </div>
            </body>

        );
    }
}
export default cards;