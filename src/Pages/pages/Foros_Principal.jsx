import React from "react";
import Barra from "../Menu"
import Foros1 from "../Foros_Principal/Foros1";
import Footer from "../Foros_Principal/Footer";


class Foros_Principal extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <Foros1 />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Foros_Principal;