import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Pages/Menu';
import Cards from './DeberHacer/Cards'
import Titulo from './DeberHacer/Titulo';
import Introduccion from './DeberHacer/Introduccion'
import Footer from './DeberHacer/Footer'
import Flechas from './DeberHacer/FlechasDeber';
import FlechasDeber from './DeberHacer/FlechasDeber';

function DeberHacer() {
    return (
        <div>
            <Nav />
            <Titulo />
            <Introduccion />
            <Cards />
            <FlechasDeber/>
            <Footer />
            

        </div>
    );
}

export default DeberHacer;
