
import { useEffect, useState } from 'react'
import './ContentMusic.css'
import { useToken } from '../../../hook/useToken'
import { getRecommendations, getTrack } from '../../../utils/getDataApi/dataGet/dataGetDataTracks'
import { getArtist, getRelatedArtist } from '../../../utils/getDataApi/dataGet/dataGetDataArtist'
import ArtistData from '../../components-data/artist-data/ArtistData'
import MusicData from '../../components-data/music-data/MusicData'
import InfoArtistData from '../../components-data/info-artist-data/InfoArtistData'
import { useParams } from 'react-router-dom'
import HeaderSection from '../../components-element/reusable/HeaderSection'
import "./../../../assets/css/style_content.css"
function ContentMusic() {

    const { id_music } = useParams()
    const [idMusic,setIdMusic] = useState(id_music)
    const [listTrack, setListTrack] = useState([])
    const [track, setTrack] = useState()
    const [artist, setArtist] = useState()
    const [listArtist, setListArtist] = useState([])
    const token = useToken()

    function handlerSetStateID(id){
        setIdMusic(id)
    }

    async function getData(id_music) {
   
        const listTrackData = await getRecommendations(id_music, "", "", 9, token)
        const trackData = await getTrack(id_music, token)
        const artistData = await getArtist(trackData.artists[0].id, token)
        const listArtistData = await getRelatedArtist(trackData.artists[0].id,8, token)


        setListArtist(listArtistData)
        setListTrack(listTrackData)
        setTrack(trackData)
        setArtist(artistData)


    }

    useEffect(() => {
        if (token !== null) {
            /*Modificar para que no dependa del caracter '*'*/
            if (idMusic === '*') {
                getData("2v0HNNJ3mijsvzOgHq8EHO")
            }
            else {
                getData(idMusic)
            }
        }
    }, [token,idMusic])

    function render_track() {
        if (track !== undefined) {
            return <MusicData index={0} images={track.album.images[0].url} id={idMusic} id_album={track.album.id} album_name={track.album.name} name={track.name} url={track.url_spotify}  handlerSetStateID={handlerSetStateID}></MusicData>
        }
    }

    function render_artist() {
        if (artist !== undefined) {
            return <InfoArtistData images={artist.images[0].url} name={artist.name} popularity={artist.popularity} followers={artist.followers} url={artist.url_spotify} genres={artist.genres}></InfoArtistData>
        }
    }

    return <section id="contenido-music">
        <section id="release_music">
            <div className='content_music_css'>
                <HeaderSection titulo={"Canciones Similares"} link={"*"} titulo_link={"Ver Mas"} ></HeaderSection >
                {listTrack.map((track_d, track_i) => {
                    return <MusicData key={track_i} index={track_i} images={track_d.album.images[0].url} id={track_d.id_song} id_album={track_d.album.id} album_name={track_d.album.name} name={track_d.name} url={track_d.url_spotify} handlerSetStateID={handlerSetStateID}></MusicData>
                })}
            </div>
        </section>
        <section id="get_music">
            <div className='content_music_css'>
                <HeaderSection titulo={"Cancion"} link={"*"} titulo_link={""} ></HeaderSection>
                {render_track()}
            </div>
        </section>
        <section id="get_artist">
            <div className='contetn_get_artist_css'>
                {render_artist()}
            </div>

        </section>
        <section id="release_artist">
            <div className="content_artist_css">
                <HeaderSection titulo={"Artistas Similares"} link={'*'} titulo_link={'Ver Mas'} ></HeaderSection >
                {listArtist.map((artist_d, artist_i) => {
                    return <ArtistData key={artist_i} images={artist_d.images[0].url}  id={artist_d.id_artist} name={artist_d.name} followers={artist_d.followers}></ArtistData>
                })}

            </div>
        </section>
    </section>
}

export default ContentMusic


