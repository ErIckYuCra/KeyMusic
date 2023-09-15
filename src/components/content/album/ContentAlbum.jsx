import './ContentAlbum.css'
import AlbumData from '../../components-data/album-data/AlbumData'
import { getAlbum, getAlbumTracks } from '../../../utils/getDataApi/dataGet/dataGetDataAlbum'
import { useEffect, useState } from 'react'
import { getAlbumArtist, getArtist } from '../../../utils/getDataApi/dataGet/dataGetDataArtist'
import MusicData from '../../components-data/music-data/MusicData'
import InfoArtistData from '../../components-data/info-artist-data/InfoArtistData'
import { useToken } from '../../../hook/useToken'
import { useParams } from 'react-router-dom'

function ContentAlbum() {


    const { id_album } = useParams();



    const [listTrack, setListMusic] = useState([])
    const [album, setAlbum] = useState([])
    const [artist, setArtist] = useState({})
    const [listAlbum, setListAlbum] = useState([])
    const token = useToken()


    async function getData(id_album) {
        const listTrackData = await getAlbumTracks(id_album, token)
        const albumData = await getAlbum(id_album, token)
        const artistData = await getArtist(albumData.artists[0].id, token)
        const listAlbumData = await getAlbumArtist(albumData.artists[0].id, token)

        /*Eliminar esta parte*/
        let number_data_track = []
        let number_data_album = []
        let number_album = []

        for (let index = 0; index < 9; index++) {
            listTrackData[index].album = { id: albumData.id_album, name: albumData.name_album, images: albumData.images }
            number_data_track.push(listTrackData[index])
        }
        for (let index = 0; index < 5; index++) {
            number_data_album.push(listAlbumData[index])
        }
        number_album.push(albumData)
        /*--------------------------*/

        setListMusic(number_data_track)
        setAlbum(number_album)
        setArtist(artistData)
        setListAlbum(number_data_album)

    }



    useEffect(() => {
        if (token !== null) {
            /*Modificar esta parte para que no dependa de '*'*/
            if (id_album === '*') {
                getData("5niZ3fPZnNq0HELNUqmvqT")
            }
            else{
                getData(id_album)
            }
        }
    }, [token])



    return <section id="contenido-album">

        <section id="album_music">
            <MusicData music_data={listTrack} music_header={"Canciones"} link={"*"} music_link={""}></MusicData>
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