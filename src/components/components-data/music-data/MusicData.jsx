import { getNumberIndex } from '../../../utils/getFunctionUtils/getNumberIndex'
import './MusicData.css'
import logo_spotify from "../../../assets/images/spotify.png"
import logo_reproductor from "../../../assets/images/reproducir.png"
import HeaderSection from '../../components-element/reusable/HeaderSection.jsx'
import { NavLink } from 'react-router-dom'

function MusicData({ music_data, music_header, link, music_link }) {




    return <section id="music-content-data">

        <HeaderSection titulo={music_header} link={link} titulo_link={music_link} ></HeaderSection >

        {music_data.map((music_d, index_music) => {
            return <div className="content_card_music" key={index_music}>

                <h1 id="contador_music">{getNumberIndex(index_music + 1)}</h1>

                <div id="img_container_music">
                    <img src={music_d.album.images[0].url} />
                </div>

                <div id="link_container_music">
                    <h1><NavLink to={"/music/"+music_d.id_song}>{music_d.name}</NavLink></h1>
                    <span><NavLink to={"/album/"+music_d.album.id}>{music_d.album.name}</NavLink></span>
                </div>


                <div id="logo_container_music">
                    <div id="logo_reproductor_music">
                        <img  src={logo_reproductor} />
                    </div>
                    <div id="logo_spotify_music">
                        <a href={music_d.url_spotify}><img  src={logo_spotify} /></a>
                    </div>
                </div>



            </div>
        })}

    </section>
}

export default MusicData