import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './NoDeberHacer/Nav';
import Titulo from './NoDeberHacer/Titulo';
import Cards from './NoDeberHacer/cards';
import Intro from './NoDeberHacer/Intro';
import Footer from './NoDeberHacer/Footer'



function NoDeberHacer () {
    return (
    <div>
    <Nav/>
    <Titulo/>
    <Intro/>
    <Cards/>
    <Footer/>
    </div>
    );
}
export default NoDeberHacer;
