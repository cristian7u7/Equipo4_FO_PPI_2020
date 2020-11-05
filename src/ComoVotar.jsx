import React from 'react';
import Nav from './Pages/Menu';
import Titulo from './Pages/ComoVotar/Titulo';
import Body from './Pages/ComoVotar/Body';
import Titulo_Instrucciones from './Pages/ComoVotar/Titulo_Instrucciones';
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonesInstrucciones from './Pages/ComoVotar/BotonesInstrucciones';
import TextoInstrucciones from './Pages/ComoVotar/TextoInstrucciones';
import Footer from './Pages/ComoVotar/Footer'


function ComoVotar () {
    return (
    <div>
    <Nav/>
    <Titulo/>
    <Body/>
    <Titulo_Instrucciones/>
    <TextoInstrucciones/>
    <BotonesInstrucciones/>
    <Footer/>
    </div>
    );
}

export default ComoVotar;