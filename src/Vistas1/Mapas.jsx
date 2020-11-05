import React from 'react';

import Menu from "../Pages/Menu"
import ContenidoMapas from "../components/Mapas/ContenidoMapas"
import Footer from "../components/Mapas/Footer";

function Mapas () {
    return (
      <div>
       <Menu/>
        <ContenidoMapas/>
        <Footer/>
      </div>
    );
  }
  
  export default Mapas;
  