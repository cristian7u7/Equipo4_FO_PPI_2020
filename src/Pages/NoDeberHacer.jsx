import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../Pages/Menu";
import Titulo from './NoDeberHacer/Titulo';
import Cards from './NoDeberHacer/cards';
import Intro from './NoDeberHacer/Intro';
import Footer from './NoDeberHacer/Footer'
import FlechasNoDeber from './NoDeberHacer/FlechasNoDeber';


function NoDeberHacer () {
    return (
    <div>
    <Nav/>
    <Titulo/>
    <Intro/>
    <Cards/>
    <FlechasNoDeber/>
    <Footer/>
    </div>
    );
}
export default NoDeberHacer;
