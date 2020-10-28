import React from "react";
import './estilo1.css';
class C_Bienvenida extends React.Component{
    render(){ 
        return(
            <div id="myCarousel" className="carru carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
        
            <div className="carousel-inner">
                <div className="item active">
                    <img src="https://i.postimg.cc/xCBDkScm/Card1.png"  id="Carrusel__1" alt=""/>
                    
                </div>
                <div className="item">
                    <img src="https://i.postimg.cc/C1RpLKLY/Card2.png"  id="Carrusel__2" alt=""/>
                    
                </div>
                <div class="item">
                <img src="https://i.postimg.cc/gj4vjgBC/Card3.png" id="Carrusel__3" alt=""/>

        </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a clasName="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        );
    }
}

export default C_Bienvenida;