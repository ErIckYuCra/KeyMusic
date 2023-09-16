
import "./AlbumData.css"
import { getNumberIndex } from "../../../utils/getFunctionUtils/getNumberIndex"
import logo_spotify from "../../../assets/images/spotify.png"
import { NavLink } from "react-router-dom"


function AlbumData({index,images,id,name,artist,tracks,date,url,handlerSetStateID}) {

    function validateHandler(){
        if(handlerSetStateID !== undefined){
            handlerSetStateID(id)
        }
    }

    return <div className="content_card_album">

        <h1 id="contador_album">{getNumberIndex(index + 1)}</h1>

        <div id="img_container_album">
            <img src={images} />
        </div>

        <div id="link_container_album">
            <h1><NavLink to={"/album/" + id} onClick={validateHandler}>{name}</NavLink></h1>
            {artist.map((artist_d, index_artist) => {
                return <span key={index_artist}><NavLink to={"/artista/" + artist_d.id}>{artist_d.name}</NavLink></span>
            })}
        </div>

        <div id="data_container_album">
            <h3>{tracks + " " + "canciones"}</h3>
            <span>{date}</span>
        </div>

        <a id="logo_spotify_album" href={url}><img src={logo_spotify} /></a>
    </div>

}

export default AlbumData

/*AlbumContentData*/