import { useEffect, useState } from 'react'
import { useToken } from '../../../hook/useToken'
import './ContentArtist.css'
import { getAlbumArtist, getArtist, getRelatedArtist, getTopTracksArtist } from '../../../utils/getDataApi/dataGet/dataGetDataArtist'
import MusicData from '../../components-data/music-data/MusicData'
import InfoArtistData from '../../components-data/info-artist-data/InfoArtistData'
import ArtistData from '../../components-data/artist-data/ArtistData'
import AlbumData from "../../components-data/album-data/AlbumData"
import { useParams } from 'react-router-dom'
import "./../../../assets/css/style_content.css"
import HeaderSection from '../../components-element/reusable/HeaderSection'
import { executeFunctionData } from '../../../utils/getFunctionUtils/executeFunctionData'
function ContentArtist() {

    const { id_artista } = useParams()

    const token = useToken()
    const [listTrack, setListMusic] = useState([])
    const [artist, setArtist] = useState()
    const [listAlbum, setListAlbum] = useState([])
    const [listArtist, setListArtist] = useState([])
    const [idArtist,setIdArtist] = useState(id_artista)

    function handlerSetStateID(id){
        setIdArtist(id)
    }


    async function getData(id_artista) {

        const artistData = await getArtist(id_artista, token)
        const listTrackData = await getTopTracksArtist(artistData.id_artist,10, token)
        const listAlbumData = await getAlbumArtist(artistData.id_artist, 4, token)
        const listArtistData = await getRelatedArtist(artistData.id_artist,8, token)

 
        setListArtist(listArtistData)
        setListMusic(listTrackData)
        setArtist(artistData)
        setListAlbum(listAlbumData)
    }

    useEffect(() => {
        if (token !== null) {
            executeFunctionData(idArtist,getData,"3vKxuOGRkXJWpCZPf01Nj8")
        }
    }, [token,idArtist])

    function render_artist() {
        if (artist !== undefined) {
            return <InfoArtistData images={artist.images[0].url} name={artist.name} popularity={artist.popularity} followers={artist.followers} url={artist.url_spotify} genres={artist.genres}></InfoArtistData>
        }
    }

    return <section id="contenido-artista">
        <section id='music_artist'>
            <div className='content_music_css'>
                <HeaderSection titulo={"Top Canciones"} link={"*"} titulo_link={"Ver Mas"} ></HeaderSection >
                {listTrack.map((track_d, track_i) => {
                    return <MusicData key={track_i} index={track_i} images={track_d.album.images[0].url} id={track_d.id_song} id_album={track_d.album.id} album_name={track_d.album.name} name={track_d.name} url={track_d.url_spotify}></MusicData>
                })}
            </div>
        </section>
        <section id='one_artist'>
            <div className='contetn_get_artist_css'>
                {render_artist()}
            </div>
        </section>
        <section id='album_artist'>
            <div className='content_album_css'>
                <HeaderSection titulo={"Albumes"} link={"*"} titulo_link={"Ver Mas"} ></HeaderSection >
                {listAlbum.map((album_d, album_i) => {
                    return <AlbumData key={album_i} index={album_i} images={album_d.images[0].url} id={album_d.id_album} name={album_d.name_album} artist={album_d.artists} tracks={album_d.tracks} date={album_d.date} url={album_d.url_spotify} ></AlbumData>
                })}
            </div>
        </section>
        <section id='releated_artist'>
            <div className='content_artist_css'>
                <HeaderSection titulo={"Artistas Similares"} link={"*"} titulo_link={"Ver Mas"} ></HeaderSection >
                {listArtist.map((artist_d, artist_i) => {
                    return <ArtistData key={artist_i} images={artist_d.images[0].url} name={artist_d.name} id={artist_d.id_artist} followers={artist_d.followers} handlerSetStateID={handlerSetStateID}></ArtistData>
                })}
            </div>
        </section>

    </section>
}

export default ContentArtist