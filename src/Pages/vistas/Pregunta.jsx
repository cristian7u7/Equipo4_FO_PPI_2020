import React from 'react';
import Menu from '../Menu';
import Titulo from '../Pregunta/Titulo';
import Parrafo from '../Pregunta/Parrafo';
import Estrellas from '../Pregunta/Estrellas';
import Footer from '../Vida_Politica_Colegio/Footer';
function Pregunta() {
    return (
     <div>
       <Menu/>
        <Titulo/>
      <Parrafo/>
       <Estrellas/> 
       <Footer/>
     </div>
  
    );
  }
  
  export default Pregunta;