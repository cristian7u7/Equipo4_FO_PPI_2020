import React from "react";
import "../components/ideologias/style2C.css"
import {Link} from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
           <div>
                <nav className=" nav navbar-expand-lg">
                <Link to="/inicio/politiqueando" className="R"> <a class="logo navbar-brand" href="#"><img className="logo" src="https://i.ibb.co/XZjtqY5/Logo-6.png" width="55px" height="70px" alt=""/></a></Link> 
           

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">

                <Link to="/inicio/politiqueando/Vida_Politica" className=""> <a class="elements elements__1 nav-link" href="#">Vida política<span class="sr-only">(current)</span></a></Link> 
                   

                </li>
                <li class="nav-item">
                <Link to="/inicio/politiqueando/Ideologias" className="R"> <a class="elements nav-link" href="#">Ideologías políticas</a></Link> 
                   
                </li>
              


                <li class="nav-item dropdown">
                    <a class="elements nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Voto
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                    
                    <Link to="/politiqueando/Voto/Razones" className=""> <a class="dropdown-item" href="#">¿Por qué hacerlo?</a>
 </Link> 
 <Link to="/inicio/ComoVotar" className="">  <a class="dropdown-item" href="#">¿Cómo votar??</a>
 </Link> 
                    

                    <Link to="/inicio/ComoVotar/deber" className=""> <a class="dropdown-item" href="#">¿Cómo hacerlo de manera correcta?</a></Link> 
                   
                    </div>
                </li>
                <li class="nav-item">
                    

                <Link to="/politiqueando/Nosotros" className=""> <a class="elements nav-link" href="#">Nosotros</a></Link> 
                   

                </li>
                </ul>
            </div>
        </nav>
          </div>
        );
    }
}

export default Menu;