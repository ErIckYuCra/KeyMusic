
import "./AlbumData.css"
import { getNumberIndex } from "../../../utils/getFunctionUtils/getNumberIndex"
import logo_spotify from "../../../assets/images/spotify.png"
import HeaderSection from "../../components-element/reusable/HeaderSection"
import { NavLink } from "react-router-dom"


function AlbumData({ album_data, album_header, link, album_link }) {
    return <section id="album-content-data">
        <HeaderSection titulo={album_header} link={link} titulo_link={album_link} ></HeaderSection >
        {album_data.map((album_d, index_album) => {
            return <div className="content_card_album" key={index_album}>

                <h1 id="contador_album">{getNumberIndex(index_album + 1)}</h1>

                <div id="img_container_album">
                    <img src={album_d.images[0].url} />
                </div>

                <div id="link_container_album">
                    <h1><NavLink to={"/album/"+album_d.id_album}>{album_d.name_album}</NavLink></h1>
                    {album_d.artists.map((artist_d, index_artist) => {
                        return <span key={index_artist}><NavLink to={"/artista/"+artist_d.id}>{artist_d.name}</NavLink></span>
                    })}
                </div>

                <div id="data_container_album">
                    <h3>{album_d.tracks + " " + "canciones"}</h3>
                    <span>{album_d.date}</span>
                </div>
                
                <a id="logo_spotify_album" href={album_d.url_spotify}><img src={logo_spotify} /></a>
            </div>
        })}
    </section>
}

export default AlbumData