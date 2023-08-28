import './NavSearch.css'

function NavSearch(){
    return <header id="cabecera-buscar">

        <ul id="lista-buscar">
            <li><button>Musica</button></li>
            <li><button>Artista</button></li>
            <li><button>Album</button></li>
            <li><button>Genero</button></li>
            
        </ul>

        <input type="text" placeholder="...Buscar"/>

    </header>
}


export default NavSearch