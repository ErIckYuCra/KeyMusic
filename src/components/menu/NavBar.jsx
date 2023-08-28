import { NavLink } from "react-router-dom";
import "./NavBar.css"
import logo from "../../assets/images/logo.png"
import explora from "../../assets/images/explorar.png"
import musica from "../../assets/images/musica.png"
import cantante from "../../assets/images/cantante.png"
import album from "../../assets/images/album.png"
import genero from "../../assets/images/genero.png"

function NavBar() {


    return <nav id="menu-lateral">
        <div id="contenedor-imagen-logo">
            <img id='imagen-logo'src={logo} />
        </div>
        <ul id="ul-navbar">
            <li className="li-navbar">
                <NavLink className="contenedor-img-navbar" href="#">

                    <div className="contenedor-icono-navbar">
                        <img className="img-navbar" src={explora} />
                    </div>

                    <h3>Explora</h3>
                </NavLink>
            </li>
            <li className="li-navbar">
                <NavLink className="contenedor-img-navbar" href="#">
                    <div className="contenedor-icono-navbar">
                        <img className="img-navbar" src={musica} />
                    </div>
                    <h3>Musica</h3>
                </NavLink>
            </li>
            <li className="li-navbar">
                <NavLink className="contenedor-img-navbar" href="#">

                    <div className="contenedor-icono-navbar">
                        <img className="img-navbar" src={cantante} />
                    </div>

                    <h3>Artista</h3>
                </NavLink>
            </li>
            <li className="li-navbar">
                <NavLink className="contenedor-img-navbar" href="#">
                    <div className="contenedor-icono-navbar">
                        <img className="img-navbar" src={album} />
                    </div>

                    <h3>Album</h3>
                </NavLink>
            </li>
            <li className="li-navbar">
                <NavLink className="contenedor-img-navbar" heref="#">
                    <div className="contenedor-icono-navbar">
                        <img className="img-navbar" src={genero} />
                    </div>
                    <h3>Genero</h3>
                </NavLink>
            </li>


        </ul>

    </nav>



}

export default NavBar