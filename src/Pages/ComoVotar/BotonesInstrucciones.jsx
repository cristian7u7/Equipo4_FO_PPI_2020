import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class BotonesInstrucciones extends React.Component {
    render() {
        return (
            
    <div class="opcionesIntrucciones">
    <div class="deberHacer"> 
    <Link to="/inicio/ComoVotar/deber" className="deber"><button type="button" class="btn btn-light">Lo que deberías de hacer</button></Link>
    </div>

    <div class="noHacer">
    <Link to="/inicio/ComoVotar/nodeber" className="deber"><button type="button" class="btn btn-light">Lo que no deberías de hacer</button></Link>

    </div>
    
    
    </div>
    
        );
    }
}
export default BotonesInstrucciones;