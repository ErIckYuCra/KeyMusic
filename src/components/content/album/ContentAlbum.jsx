import './ContentAlbum.css'
import AlbumData from '../../components-data/album-data/AlbumData'
import { getAlbum, getAlbumTracks } from '../../../utils/getDataApi/dataGet/dataGetDataAlbum'
import { useEffect, useState } from 'react'
import { getAlbumArtist, getArtist } from '../../../utils/getDataApi/dataGet/dataGetDataArtist'
import MusicData from '../../components-data/music-data/MusicData'
import InfoArtistData from '../../components-data/info-artist-data/InfoArtistData'
import { useToken } from '../../../hook/useToken'
import { useParams } from 'react-router-dom'
import "./../../../assets/css/style_content.css"
import HeaderSection from '../../components-element/reusable/HeaderSection'
import { executeFunctionData } from '../../../utils/getFunctionUtils/executeFunctionData'

function ContentAlbum() {


    const { id_album } = useParams();



    const [listTrack, setListMusic] = useState([])
    const [album, setAlbum] = useState()
    const [artist, setArtist] = useState()
    const [listAlbum, setListAlbum] = useState([])
    const token = useToken()
    const [idAlbum,setIdAlbum] = useState(id_album)

    function handlerSetStateID(id){
        setIdAlbum(id)
    }

    async function getData(idAlbum) {
        const listTrackData = await getAlbumTracks(idAlbum, 9, token)
        const albumData = await getAlbum(idAlbum, token)
        const artistData = await getArtist(albumData.artists[0].id, token)
        const listAlbumData = await getAlbumArtist(albumData.artists[0].id, 5, token)
        setListMusic(listTrackData)
        setAlbum(albumData)
        setArtist(artistData)
        setListAlbum(listAlbumData)
    }


    useEffect(() => {
        if (token !== null) {
            executeFunctionData(idAlbum,getData,"5niZ3fPZnNq0HELNUqmvqT")
        }
    }, [token,idAlbum])


    function render_artist() {
        if (artist !== undefined) {
            return <InfoArtistData images={artist.images[0].url} name={artist.name} popularity={artist.popularity} followers={artist.followers} url={artist.url_spotify} genres={artist.genres}></InfoArtistData>
        }
    }

    function render_album() {
        if (album !== undefined) {
            return <AlbumData index={0} images={album.images[0].url} id={idAlbum} name={album.name_album} artist={album.artists} tracks={album.tracks} date={album.date} url={album.url_spotify} ></AlbumData>
        }
    }



    return <section id="contenido-album">

        <section id="album_music">
            <div className='content_music_css'>
                <HeaderSection titulo={"Canciones"} link={"*"} titulo_link={"Ver Mas"} ></HeaderSection >
                {listTrack.map((track_d, track_i) => {
                    return <MusicData key={track_i} index={track_i} images={album.images[0].url} id={track_d.id_song} id_album={album.id_album} album_name={album.name_album} name={track_d.name} url={track_d.url_spotify}></MusicData>
                })}
            </div>

        </section>
        <section id="get_album">
            <div className='content_album_css'>
                <HeaderSection titulo={"Otros Albumes"} link={"*"} titulo_link={"Ver Mas"} ></HeaderSection >
                {render_album()}
            </div>

        </section>
        <section id="get_artist">
            <div className='contetn_get_artist_css'>
                {render_artist()}
            </div>
        </section>
        <section id="all_album">
            <div className='content_album_css'>
                <HeaderSection titulo={"Otros Albumes"} link={"*"} titulo_link={"Ver Mas"} ></HeaderSection >
                {listAlbum.map((album_d, album_i) => {
                    return <AlbumData key={album_i} index={album_i} images={album_d.images[0].url} id={album_d.id_album} name={album_d.name_album} artist={album_d.artists} tracks={album_d.tracks} date={album_d.date} url={album_d.url_spotify} handlerSetStateID={handlerSetStateID}></AlbumData>
                })}
            </div>
        </section>

    </section>
}

export default ContentAlbum