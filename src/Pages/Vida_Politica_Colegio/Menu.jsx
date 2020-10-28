import React from "react";
import "./style3.css";


class Menu extends React.Component {
    render() {
        return (
            <div>
            
            <nav className="barrita navbar-expand-lg">
            <a class="logo navbar-brand" href="#"><img src="https://i.ibb.co/XZjtqY5/Logo-6.png" width="55" height="70" alt=""/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="elements elements__1 nav-link" href="/Vida_Politica">Vida política<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="elements nav-link" href="#">Ideologías políticas</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="elements nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Voto
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">¿Por qué hacerlo?</a>
                    <a class="dropdown-item" href="#">¿Dónde debo hacerlo?</a>
                    <a class="dropdown-item" href="#">¿Cómo hacerlo de manera correcta?</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="elements nav-link" href="#">Nosotros</a>
                </li>
                </ul>
            </div>
        </nav>
        </div>
        );
    }
}

export default Menu;