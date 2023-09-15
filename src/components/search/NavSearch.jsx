import { useState } from 'react'
import './NavSearch.css'
import { useToken } from '../../hook/useToken'
import { getDataSearch } from '../../utils/getDataApi/dataGet/dataGetDataSearch'
import { NavLink } from 'react-router-dom'

function NavSearch() {
    const token = useToken()
    const [search, setSearch] = useState("")
    const [listSearch, setListSearch] = useState([])

    async function getData(querySearch, typeSearch) {
        const dataSearch = await getDataSearch(querySearch, typeSearch, token)
        setListSearch(dataSearch)
    }



    function handleOnFocus(){
        let resultDivSearch = document.querySelector("#content_search")
        if(resultDivSearch !== null){
            resultDivSearch.style.display = "block"
        }

    }

    function handleOnBlur(){
        let resultDivSearch = document.querySelector("#content_search")
        if(resultDivSearch !== null){
            resultDivSearch.style.display = "none"
        }

    }


    function getSearch(e) {
        let querySearch = e.target.value
        let listCheckBoxCheked = document.querySelectorAll(".miCheckbox:checked")

        /*Modular esto en una funcion*/
        let check = []
        let stringTypeSearch = ""
        if (listCheckBoxCheked.length == 0) {
            stringTypeSearch = "track,album,artist"
        }
        else {
            listCheckBoxCheked.forEach(element => {
                check.push(element.value)
            });
            stringTypeSearch = check.join(",");
        }
        /*--------------------------------*/

        if (token !== undefined && querySearch !== "") {

            getData(querySearch, encodeURIComponent(stringTypeSearch))
        }
        setSearch(querySearch)
    }

    return <header id="cabecera-buscar">

        <ul id="lista-buscar">
            <li>
                <input type="checkbox" id="c_music" className="miCheckbox" value="track" />
                <label className="checkbox-label" htmlFor="c_music">Cancion</label>
            </li>
            <li>
                <input type="checkbox" id='a_music' className="miCheckbox" value="artist" />
                <label className="checkbox-label" htmlFor="a_music">Artista</label>
            </li>
            <li>
                <input type="checkbox" id='al_music' className="miCheckbox" value="album" />
                <label className="checkbox-label" htmlFor="al_music">Album</label>
            </li>
        </ul>

        <div className='contenedor' >
            <form>
                <input onFocus={handleOnFocus}  type="text" value={search} placeholder="...Buscar" onChange={(e) => { getSearch(e)}} />
            </form>
            {listSearch.length == 0 || search == "" ? "" :
                <div id='content_search'  >

                    {listSearch.map((search_d, index_search) => {
                        return <NavLink to={"/" + search_d.url + "/" + search_d.id} key={index_search} onFocus={()=>{}} onBlur={handleOnBlur} >
                            <div className='search_result' >
                                <span className='name_search'>{search_d.nombre}</span>
                                <span className='type_search'>{search_d.tipo}</span>
                            </div>
                        </NavLink>

                    })
                    }
                </div>}
        </div>



    </header>
}


export default NavSearch