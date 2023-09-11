import { getNumberIndex } from '../../../utils/getNumberIndex'
import './MusicData.css'
import logo_spotify from "../../../assets/images/spotify.png"
import logo_reproductor from "../../../assets/images/reproducir.png"
import HeaderSection from '../../content/reusable/HeaderSection'

function MusicData({ music_data,music_header,link,music_link }) {


    

    return <section id="music-content-data">

        <HeaderSection titulo={music_header} link={link} titulo_link={music_link} ></HeaderSection >

        {music_data.map((music_d, index_music) => {
            return <div className="content_card_music" key={index_music}>

                <h1 id="contador_music">{getNumberIndex(index_music + 1)}</h1>

                <div id="img_container_music">
                    <img src={music_d.album.images[0].url}></img>
                </div>

                <div id="link_container_music">
                    <h1>{music_d.name}</h1>
                    <span>{music_d.album.name}</span>
                </div>


                <div id="logo_container_music">
                    <img id="logo_reproductor_music" src={logo_reproductor} />
                    <img id="logo_spotify_music" src={logo_spotify} />
                </div>



            </div>
        })}

    </section>
}

export default MusicData