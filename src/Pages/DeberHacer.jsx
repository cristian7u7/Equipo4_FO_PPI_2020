import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Pages/Menu';
import Cards from './DeberHacer/Cards'
import Titulo from './DeberHacer/Titulo';
import Introduccion from './DeberHacer/Introduccion'
import Footer from './DeberHacer/Footer'

function DeberHacer() {
    return (
        <div>
            <Nav />
            <Titulo />
            <Introduccion />
            <Cards />
            <Footer />

        </div>
    );
}

export default DeberHacer;
