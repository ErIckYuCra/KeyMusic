
import { useEffect, useState } from 'react'
import './ContentMusic.css'
import { useToken } from '../../../hook/useToken'
import { getRecommendations, getTrack } from '../../../utils/getDataApi/dataGet/dataGetDataTracks'
import { getArtist, getRelatedArtist } from '../../../utils/getDataApi/dataGet/dataGetDataArtist'
import ArtistData from '../../components-data/artist-data/ArtistData'
import MusicData from '../../components-data/music-data/MusicData'
import InfoArtistData from '../../components-data/info-artist-data/InfoArtistData'
import { useParams } from 'react-router-dom'
function ContentMusic() {

    const {id_music} = useParams()
    const [listTrack, setListTrack] = useState([])
    const [track, setTrack] = useState([])
    const [artist, setArtist] = useState({})
    const [listArtist, setListArtist] = useState([])
    const token = useToken()


    async function getData(id_music) {
        const listTrackData = await getRecommendations(id_music, "", "", token)
        const trackData = await getTrack(id_music, token)
        const artistData = await getArtist(trackData.artists[0].id, token)
        const listArtistData = await getRelatedArtist(trackData.artists[0].id, token)

        /*Eliminar esta parte*/
        let number_data_track = []
        let number_data_artist = []
        let number_track = []

        for (let index = 0; index < 9; index++) {
            number_data_track.push(listTrackData[index])
        }
        for (let index = 0; index < 8; index++) {
            number_data_artist.push(listArtistData[index])
        }
        number_track.push(trackData)
        /*-------------------------*/

        setListTrack(number_data_track)
        setTrack(number_track)
        setArtist(artistData)
        setListArtist(number_data_artist)
        
    }

    useEffect(() => {
        if (token !== null) {
            /*Modificar para que no dependa del caracter '*'*/
            if (id_music === '*') {
                getData("2v0HNNJ3mijsvzOgHq8EHO")
            }
            else{
                getData(id_music)
            }
        }
    },[token])


    return <section id="contenido-music">
        <section id="release_music">
            <MusicData music_data={listTrack} music_header={"Canciones Similares"} link={"*"} music_link={"Opciones de Busqueda"}></MusicData>
        </section>
        <section id="get_music">
            <MusicData music_data={track} music_header={"Cancion"} link={"*"} music_link={""}></MusicData>
        </section>
        <section id="get_artist">
            <InfoArtistData one_artist_data={artist}></InfoArtistData>
        </section>
        <section id="release_artist">
            <ArtistData artist_data={listArtist} artist_header={"Artistas Similares"} link={"*"} artist_link={""}></ArtistData>
        </section>
    </section>
}

export default ContentMusic