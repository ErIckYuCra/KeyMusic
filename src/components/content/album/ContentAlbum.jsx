import './ContentAlbum.css'
import AlbumData from '../../components-data/album-data/AlbumData'
import { getAlbum, getAlbumSongs } from '../../../utils/getDataApi/dataGetDataAlbum'
import { useEffect, useState } from 'react'
import { getAlbumArtist, getArtist } from '../../../utils/getDataApi/dataGetDataArtist'
import MusicData from '../../components-data/music-data/MusicData'
import InfoArtistData from '../../components-data/info-artist-data/InfoArtistData'
import { useToken } from '../../../hook/useToken'

function ContentAlbum() {

    const [listMusic, setListMusic] = useState([])
    const [album, setAlbum] = useState([])
    const [artist, setArtist] = useState({})
    const [listAlbum, setListAlbum] = useState([])
    const token = useToken()


    async function getData() {
        const listMusicData = await getAlbumSongs("5niZ3fPZnNq0HELNUqmvqT", token)
        const albumData = await getAlbum("5niZ3fPZnNq0HELNUqmvqT", token)
        const artistData = await getArtist(albumData.artists[0].id, token)
        const listAlbumData = await getAlbumArtist(albumData.artists[0].id, token)

        let number_data_song = []
        let number_data_album = []
        let number_album = []

        for (let index = 0; index < 9; index++) {

            listMusicData[index].album = {id: albumData.id_album,name: albumData.name_album,images: albumData.images}
            number_data_song.push(listMusicData[index])
        }
        for (let index = 0; index < 5; index++) {
            number_data_album.push(listAlbumData[index])
        }
        number_album.push(albumData)

        setListMusic(number_data_song)
        setAlbum(number_album)
        setArtist(artistData)
        setListAlbum(number_data_album)

    }



    useEffect(() => {
        if (token !== null) {
            getData()
        }
    }, [token])



    return <section id="contenido-album">

        <section id="album_music">
            <MusicData music_data={listMusic} music_header={"Canciones"} link={"*"} music_link={""}></MusicData>
        </section>
        <section id="get_album">
            <AlbumData album_data={album} album_header={"Album"} link={"*"} music_link={""}></AlbumData>
        </section>
        <section id="get_artist">
            <InfoArtistData one_artist_data={artist}></InfoArtistData>
        </section>
        <section id="all_album">
            <AlbumData album_data={listAlbum} album_header={"Otros Albumes"} link={"*"} music_link={""}></AlbumData>
        </section>

    </section>
}

export default ContentAlbum