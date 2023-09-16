import { getNumberIndex } from '../../../utils/getFunctionUtils/getNumberIndex'
import './MusicData.css'
import logo_spotify from "../../../assets/images/spotify.png"
import logo_reproductor from "../../../assets/images/reproducir.png"
import HeaderSection from '../../components-element/reusable/HeaderSection.jsx'
import { NavLink } from 'react-router-dom'

function MusicData({ index, images, id, id_album, album_name, name, url,handlerSetStateID}) {

    function validateHandler(){
        console.log(handlerSetStateID)
        if(handlerSetStateID !== undefined){
            handlerSetStateID(id)
        }
    }

    return <div className="content_card_music">

        <h1 id="contador_music">{getNumberIndex(index + 1)}</h1>

        <div id="img_container_music">
            <img src={images} />
        </div>

        <div id="link_container_music">
            <h1><NavLink to={"/music/" + id} onClick={validateHandler}>{name}</NavLink></h1>
            <span><NavLink to={"/album/" + id_album}>{album_name}</NavLink></span>
        </div>

        <div id="logo_container_music">
            <div id="logo_reproductor_music">
                <img src={logo_reproductor} />
            </div>
            <div id="logo_spotify_music">
                <a href={url}><img src={logo_spotify} /></a>
            </div>
        </div>



    </div>

}

export default MusicData