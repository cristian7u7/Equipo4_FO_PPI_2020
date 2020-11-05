import React from "react";
import Barra from "../Menu"
import Pregunta1 from "../Pregunta1/Pregunta1";
import Footer from "../Pregunta1/Footer";


class PreguntaUno extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <Pregunta1 />
                <Footer />
            </React.Fragment>
        );
    }
}

export default PreguntaUno;