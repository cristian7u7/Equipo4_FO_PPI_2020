import React from 'react';
import Menu from '../Pregunta/Menu';
import Titulo from '../Pregunta/Titulo';
import Parrafo from '../Pregunta/Parrafo';
import Estrellas from '../Pregunta/Estrellas';

function Pregunta() {
    return (
     <div>
       <Menu/>
        <Titulo/>
      <Parrafo/>
       <Estrellas/> 
     </div>
  
    );
  }
  
  export default Pregunta;