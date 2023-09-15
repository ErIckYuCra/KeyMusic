import { useEffect, useState } from 'react'
import { useToken } from '../../../hook/useToken'
import './ContentArtist.css'
import { getAlbumArtist, getArtist, getRelatedArtist, getTopTracksArtist } from '../../../utils/getDataApi/dataGet/dataGetDataArtist'
import MusicData from '../../components-data/music-data/MusicData'
import InfoArtistData from '../../components-data/info-artist-data/InfoArtistData'
import ArtistData from '../../components-data/artist-data/ArtistData'
import AlbumData from "../../components-data/album-data/AlbumData"
import { useParams } from 'react-router-dom'
function ContentArtist() {

    const {id_artista} = useParams()

    const token = useToken()
    const [listTrack, setListMusic] = useState([])
    const [artist, setArtist] = useState({})
    const [listAlbum, setListAlbum] = useState([])
    const [listArtist, setListArtist] = useState([])

    async function getData(id_artista) {

        const artistData = await getArtist(id_artista, token)
        const listTrackData = await getTopTracksArtist(artistData.id_artist, token)
        const listAlbumData = await getAlbumArtist(artistData.id_artist, token)
        const listArtistData = await getRelatedArtist(artistData.id_artist, token)

        /*Eliminar esta seccion*/
        let number_data_track = []
        let number_data_artist = []
        let number_data_album = []
        for (let index = 0; index < 10; index++) {
            number_data_track.push(listTrackData[index])
        }
        for (let index = 0; index < 8; index++) {
            number_data_artist.push(listArtistData[index])
        }
        for (let index = 0; index < 4; index++) {
            number_data_album.push(listAlbumData[index])
        }
        /*----------------------------*/

        setArtist(artistData)
        setListAlbum(number_data_album)
        setListArtist(number_data_artist)
        setListMusic(number_data_track)

    }

    useEffect(() => {
        if (token !== null) {
            /*Modificar if para para que no dependa del caracter '*'*/
            if (id_artista === '*') {
                getData("3vKxuOGRkXJWpCZPf01Nj8")
            }
            else{
                getData(id_artista)
            }
        }
    }, [token])

    return <section id="contenido-artista">
        <section id='music_artist'>
            <MusicData music_data={listTrack} music_header={"Top Canciones"} link={"*"} music_link={""}></MusicData>
        </section>
        <section id='one_artist'>
            <InfoArtistData one_artist_data={artist}></InfoArtistData>
        </section>
        <section id='album_artist'>
            <AlbumData album_data={listAlbum} album_header={"Albumes"} link={"*"} album_link={""}></AlbumData>
        </section>
        <section id='releated_artist'>
            <ArtistData artist_data={listArtist} artist_header={"Artistas Similares"} link={"*"} artist_link={""}></ArtistData>
        </section>

    </section>
}

export default ContentArtist