import React from "react";
import Barra from "../Menu"
import Pregunta2 from "../Pregunta2/Pregunta2";
import Footer from "../Pregunta2/Footer";


class PreguntaDos extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <Pregunta2 />
                <Footer />
            </React.Fragment>
        );
    }
}

export default PreguntaDos;