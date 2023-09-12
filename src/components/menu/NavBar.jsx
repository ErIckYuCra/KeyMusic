import { NavLink } from "react-router-dom";
import "./NavBar.css"
import logo from "../../assets/images/logo.png"
import explora from "../../assets/images/explorar.png"
import explora_activo from "../../assets/images/explorar-seleccion.png"
import musica from "../../assets/images/musica.png"
import musica_activo from "../../assets/images/musica-seleccion.png"
import cantante from "../../assets/images/cantante.png"
import cantante_activo from "../../assets/images/cantante-seleccion.png"
import album from "../../assets/images/album.png"
import album_activo from "../../assets/images/album-seleccion.png"
import genero from "../../assets/images/genero.png"

function NavBar() {


    return <nav id="menu-lateral">

        <div id="contenedor_nav_lateral">

            <div id="contenedor-imagen-logo">
                <img id='imagen-logo' src={logo} />
            </div>
            <ul id="ul-navbar">
                <li className="li-navbar">
                    <NavLink className="contenedor-img-navbar" to="/explorar">
                        {({ isActive }) => (
                            <>
                                <div>
                                    <img className='img-navbar' src={isActive ? explora_activo : explora} />

                                </div>
                                <h3>Explora</h3>
                                <div className="indicador"></div>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className="li-navbar">
                    <NavLink className="contenedor-img-navbar" to="/music">
                        {({ isActive }) => (
                            <>
                                <div>
                                    <img className='img-navbar' src={isActive ? musica_activo : musica} />

                                </div>
                                <h3>Music</h3>
                                <div className="indicador"></div>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className="li-navbar">
                    <NavLink className="contenedor-img-navbar" to="/artista">

                        {({ isActive }) => (
                            <>
                                <div>
                                    <img className='img-navbar' src={isActive ? cantante_activo : cantante} />

                                </div>
                                <h3>Artista</h3>
                                <div className="indicador"></div>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className="li-navbar">
                    <NavLink className="contenedor-img-navbar" to="/album">
                        {({ isActive }) => (
                            <>
                                <div>
                                    <img className='img-navbar' src={isActive ? album_activo : album} />

                                </div>
                                <h3>Album</h3>

                                <div className="indicador"></div>
                            </>
                        )}
                    </NavLink>
                </li>



            </ul>

        </div>



    </nav>



}

export default NavBar