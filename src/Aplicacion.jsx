import React from "react";
import { BrowserRouter, Switch , Route} from "react-router-dom";
import Vida_Politica from '../src/Pages/vistas/Vida_Politica';
import Vida_Politica_Niño from './Pages/vistas/Vida_Politica_Niño.jsx';
import Vida_Politica_Colegio from "./Pages/vistas/Vida_Politica_Colegio";
import Vida_Politica_Adolescente from "./Pages/vistas/Vida_Politica_Adolescente";
import Vida_Politica_Adulto from "./Pages/vistas/Vida_Politica_Adulto";
import Pregunta from "./Pages/vistas/Pregunta";
// import Mapas from "./components/Mapas";
// import Mapa2 from "./components/Mapa2";
// import Mapa3 from "./components/Mapa3"
// import Foros from "./components/Foros";
// import Pregunta1 from "./components/Pregunta1";
// import Ideologias from "./components/Ideologias";
// import ComoVotar from './Pages/ComoVotar/ComoVotar';
// import DeberHacer from './Pages/ComoVotar/DeberHacer';
// import NoDeberHacer from './Pages/ComoVotar/NoDeberHacer';


function Aplicacion(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/Vida_Politica" component={Vida_Politica}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Niño" component={Vida_Politica_Niño}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Colegio" component={Vida_Politica_Colegio}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Adolescente" component={Vida_Politica_Adolescente}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Adulto" component={Vida_Politica_Adulto}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Pregunta" component={Pregunta}/>         
        </Switch>
        {/* <Switch>
            <Route exact path="/Ideologias" component={Ideologias}/>
            <Route exact path="/Ideologias/mapas" component={Mapas}/>
            <Route exact path="/Ideologias/foros" component={Foros}/>
            <Route exact path="/Ideologias/mapas/mapa2" component={Mapa2}/>
            <Route exact path="/Ideologias/mapas/mapa2/mapa3/foros" component={Foros}/>
            <Route exact path="/Ideologias/mapas/mapa2/mapa3/foros/pregunta1" component={Pregunta1}/>
             <Route exact path="/Ideologias/mapas/mapa2/mapa3" component={Mapa3}/>
           <Route exact path=" /foros/Ideologias/" component={Ideologias}/>
           <Route exact path="/Ideologias/mapas/mapa2/Ideologias" component={Ideologias}/>
           <Route exact path="/Ideologias/mapas/mapa2/mapa3/foros/Ideologias" component={Ideologias}/>
           <Route exact path="/Ideologias/mapas/mapa2/mapa3/foros/pregunta1/Ideologias" component={Ideologias}/>
          
       

        </Switch>
        <Switch>
        <Route exact path="/politiqueando" component={ComoVotar}/>
        <Route exact path="/politiqueando/deber" component={DeberHacer}/>
        <Route exact path="/politiqueando/deber/nodeber" component={NoDeberHacer}/>
        
        </Switch> */}
        </BrowserRouter>
    );
}
export default Aplicacion;