import React from "react";
import { BrowserRouter, Switch , Route} from "react-router-dom";
import Vida_Politica from '../src/Pages/vistas/Vida_Politica';
import Vida_Politica_Niño from './Pages/vistas/Vida_Politica_Niño.jsx';
import Vida_Politica_Colegio from "./Pages/vistas/Vida_Politica_Colegio";
import Vida_Politica_Adolescente from "./Pages/vistas/Vida_Politica_Adolescente";
import Vida_Politica_Adulto from "./Pages/vistas/Vida_Politica_Adulto";
import Vida_Politica_Personero from "./Pages/vistas/Vida_Politica_Personero";
import Vida_Politica_Contralor from "./Pages/vistas/Vida_Politica_Contralor"
import Pregunta from "./Pages/vistas/Pregunta";
import ComoVotar from './ComoVotar';
import DeberHacer from './Pages/DeberHacer';
import NoDeberHacer from './Pages/NoDeberHacer';
import InicioSesion from './Pages/InicioSesion';
import Regis from "./Pages/Regis";
import Principal from "./Pages/pages/Principal";
import Voto from "./Pages/pages/Voto";
import Razones_V from "./Pages/pages/Razones_V";
import Nosotros from "./Pages/pages/Nosotros";
import Foros_Principal from './Pages/pages/Foros_Principal';
import PreguntaUno from "./Pages/pages/PreguntaUno";
import PreguntaDos from "./Pages/pages/PreguntaDos";
import PreguntaTres from "./Pages/pages/PreguntaTres";
import Mapas from "./Vistas1/Mapas";
import Mapa2 from "./Vistas1/Mapa2";
import Mapa3 from "./Vistas1/Mapa3"
import Ideologias from "./Vistas1/Ideologias";
import Mapa4 from "./Vistas1/Mapa4";
import IntroduccionMapa from "./Vistas1/ContenidoIntroduccion_1"
import ContenidoIntroduccion_1 from "./Vistas1/ContenidoIntroduccion_1";


function Aplicacion(){
    return(
        <BrowserRouter>
        
        
        <Route exact path="inicio/Regis/inicio" component={InicioSesion}/>
        <Route exact path="/inicio/Regis" component={Regis}/>
        <Route exact path="inicio/Regis/inicio" component={InicioSesion}/>
        <Route exact path="inicio/Regis/inicio" component={InicioSesion}/>
        <Route exact path="/inicio/ComoVotar" component={ComoVotar}/>
        <Route exact path= "/inicio" component={InicioSesion}/>
        <Route exact path="/inicio/politiqueando" component={Principal} />;
        <Route exact path="/inicio/politiqueando/Vida_Politica" component={Vida_Politica}/>         
        <Route exact path="/inicio/politiqueando/Vida_Politica/Vida_Politica_Niño" component={Vida_Politica_Niño}/>         
        <Route exact path="/inicio/politiqueando/Vida_Politica/Vida_Politica_Niño/Vida_Politica_Colegio" component={Vida_Politica_Colegio}/>    
        <Route exact path="/inicio/politiqueando/Vida_Politica/Vida_Politica_Adolescente" component={Vida_Politica_Adolescente}/>         
        <Route exact path="/inicio/politiqueando/Vida_Politica/Vida_Politica_Adulto" component={Vida_Politica_Adulto}/>
        <Route exact path="/inicio/politiqueando/Vida_Politica/Vida_Politica_Pregunta" component={Pregunta}/>
        <Route exact path="/inicio/politiqueando/Vida_Politica/Vida_Politica_Personero" component={Vida_Politica_Personero}/> 
        <Route exact path="/inicio/politiqueando/Vida_Politica/Vida_Politica_Contralor" component={Vida_Politica_Contralor}/>         
       <Route exact path="/inicio/ComoVotar/deber" component={DeberHacer}/>
        <Route exact path="/inicio/ComoVotar/nodeber" component={NoDeberHacer}/>
        <Route exact path="/politiqueando/Voto" component={Voto} />;
        <Route exact path="/politiqueando/Voto/Razones" component={Razones_V} />;
        <Route exact path="/politiqueando/Nosotros" component={Nosotros} />;
        <Route exact path="/politiqueando/Foros" component={Foros_Principal} />;
        <Route exact path="/politiqueando/Foros/Pregunta1" component={PreguntaUno} />;
        <Route exact path="/politiqueando/Foros/Pregunta2" component={PreguntaDos} />;
        <Route exact path="/politiqueando/Foros/Pregunta3" component={PreguntaTres} />;
        
        <Route exact path="/inicio/politiqueando/Ideologias" component={Ideologias}/>
        <Route exact path="/Ideologias/IntroduccionMapa/mapas" component={Mapas}/>
        <Route exact path="/Ideologias/IntroduccionMapa/mapas/mapa2" component={Mapa2}/>
        <Route exact path="/Ideologias/IntroduccionMapa/mapas/mapa2/mapa3" component={Mapa3}/>
        <Route exact path="/Ideologias/mapas/Ideologias" component={Ideologias}/>
        <Route exact path="/Ideologias/IntroduccionMapa/mapas/mapa2/mapa3/mapa4" component={Mapa4}/>
        <Route exact path="/Ideologias/IntroduccionMapa" component={IntroduccionMapa}/>
        
   
            

       
        </BrowserRouter>
        
        
    );
}
export default Aplicacion;