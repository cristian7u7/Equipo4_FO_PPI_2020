import React from "react";
import Barra from "../Menu"
import Titulo_Nosotros from "../Nosotros/Titulo_Nosotros";
import Footer from "../Nosotros/Footer";


class Nosotros extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <Titulo_Nosotros />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Nosotros;