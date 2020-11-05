import React from "react";
import Barra from "../Menu"
import Pregunta3 from "../Pregunta3/Pregunta3";
import Footer from "../Pregunta3/Footer";


class PreguntaTres extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <Pregunta3 />
                <Footer />
            </React.Fragment>
        );
    }
}

export default PreguntaTres;