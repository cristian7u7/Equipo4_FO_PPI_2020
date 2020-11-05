import React from 'react';
import Menu from '../Menu';
import Titulo from '../Vida_Politica/Titulo';
import Recuadro from '../Vida_Politica/Recuadro';
import Imagen_inicio from '../Vida_Politica/Imagen_inicio';
import Titulo2 from '../Vida_Politica/Titulo2';
import Parrafo from '../Vida_Politica/Parrafo';
import Subtitulo from '../Vida_Politica/Subtitulo';
import Personas2 from '../Vida_Politica/Personas2';
import Texto_Final from '../Vida_Politica/Texto_Final';


function Vida_Politica() {
    return (
     <div>
       <Menu/>
       <Imagen_inicio/>
       <Titulo/>
       
       <Recuadro/> 
       <Titulo2/>
       <Parrafo/>
       <Subtitulo/>
       <Personas2/>
        <Texto_Final/> 
     </div>
  
    );
  }
  
  export default Vida_Politica;