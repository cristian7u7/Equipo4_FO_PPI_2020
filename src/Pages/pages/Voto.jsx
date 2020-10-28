import React from "react";
import Barra from "../Voto/Barra";
import Titulo_Voto from "../Voto/Titulo_Voto";
import Cards_Voto from "../Voto/Cards_Voto";
import Footer from "../Voto/Footer";


class Voto extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <Titulo_Voto />
                <Cards_Voto />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Voto;