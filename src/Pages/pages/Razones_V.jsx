import React from "react";
import Barra from "../Razones/Barra";
import Titulo_PVoto from "../Razones/Titulo_PVoto";
import Titulo_Razones from "../Razones/Titulo_Razones";
import Razones from "../Razones/Razones";
import Footer from "../Razones/Footer";


class Razones_V extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <Titulo_PVoto />
                <Titulo_Razones />
                <Razones />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Razones_V;