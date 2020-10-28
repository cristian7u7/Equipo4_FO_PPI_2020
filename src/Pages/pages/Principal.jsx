import React from "react";
import Barra from "../Principal/Barra"
import C_Bienvenida from "../Principal/C_Bienvenida";
import Titulo1 from "../Principal/Titulo1";
import Titulo_Temas from "../Principal/Titulo_Temas";
import Temas from "../Principal/Temas";
import Intro_Foros from "../Principal/Intro_Foros";
import Footer from "../Principal/Footer";

class Principal extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <C_Bienvenida />
                <Titulo1 />
                <Titulo_Temas />
                <Temas />
                <Intro_Foros />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Principal;