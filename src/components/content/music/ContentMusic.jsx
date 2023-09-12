
import { useEffect, useState } from 'react'
import './ContentMusic.css'
import { useToken } from '../../../hook/useToken'
import { getRecommendations, getSong } from '../../../utils/getDataApi/dataGetDataSongs'
import { getArtist, getRelatedArtist } from '../../../utils/getDataApi/dataGetDataArtist'
import ArtistData from '../../components-data/artist-data/ArtistData'
import MusicData from '../../components-data/music-data/MusicData'
import InfoArtistData from '../../components-data/info-artist-data/InfoArtistData'
function ContentMusic() {

    const [listMusic, setListMusic] = useState([])
    const [music, setMusic] = useState([])
    const [artist, setArtist] = useState({})
    const [listArtist, setListArtist] = useState([])
    const token = useToken()


    async function getData() {
        const listMusicData = await getRecommendations("2v0HNNJ3mijsvzOgHq8EHO", "", "", token)
        const musicData = await getSong("2v0HNNJ3mijsvzOgHq8EHO", token)
        const artistData = await getArtist(musicData.artists[0].id, token)
        const listArtistData = await getRelatedArtist(musicData.artists[0].id, token)

        let number_data_song = []
        let number_data_artist = []
        let number_song = []

        for (let index = 0; index < 9; index++) {
            number_data_song.push(listMusicData[index])
        }
        for (let index = 0; index < 8; index++) {
            number_data_artist.push(listArtistData[index])
        }
        number_song.push(musicData)

        setListMusic(number_data_song)
        setMusic(number_song)
        setArtist(artistData)
        setListArtist(number_data_artist)
        
    }



    useEffect(() => {
        if (token !== null) {
            getData()
        }
    },[token])


    return <section id="contenido-music">
        <section id="release_music">
            <MusicData music_data={listMusic} music_header={"Canciones Similares"} link={"*"} music_link={"Opciones de Busqueda"}></MusicData>
        </section>
        <section id="get_music">
            <MusicData music_data={music} music_header={"Cancion"} link={"*"} music_link={""}></MusicData>
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