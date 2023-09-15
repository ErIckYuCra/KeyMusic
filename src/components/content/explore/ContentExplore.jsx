import { useEffect, useState } from "react"

import './ContentExplore.css'
import { getTrackListPlayList } from "../../../utils/getDataApi/dataGet/dataGetDataPlayList"
import { useToken } from "../../../hook/useToken"
import { getNewReleasepAlbum} from "../../../utils/getDataApi/dataGet/dataGetDataAlbum"
import AlbumData from "../../components-data/album-data/AlbumData"
import MusicData from "../../components-data/music-data/MusicData"
import ArtistData from "../../components-data/artist-data/ArtistData"
import { getListArtist } from "../../../utils/getDataApi/dataGet/dataGetDataArtist"

function ContentExplore() {

    const [albumList, setAlbumList] = useState([])
    const [trackList, setTrackList] = useState([])
    const [artistList, setArtistList] = useState([])
    const token = useToken()

    async function getData() {
        const data_track = await getTrackListPlayList("37i9dQZF1DXdbXrPNafg9d", token)
        const data_artist = await getListArtist("2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,3vKxuOGRkXJWpCZPf01Nj8,62r23J4b195KwCZIpRB2Jb,4PtVXWSOmF4Tox1jj6ctSq,1bXOJUefXiubpe3686KYFm", token)
        const data_album = await getNewReleasepAlbum(token)

        /*Eliminar esta seccion*/
        let number_data_song = []
        let number_data_album = []
        for (let index = 0; index < 4; index++) {
            number_data_song.push(data_track[index])
            number_data_album.push(data_album[index])
        }
        /*-----------------------*/

        setArtistList(data_artist)
        setTrackList(number_data_song)
        setAlbumList(number_data_album)
    }

    useEffect(() => {
        if (token !== null) {
            getData()
        }
    }, [token])

    return <section id="contenido-explore">
        <section id="artist_explore">
            <ArtistData artist_data={artistList} artist_header={"Descubre Nuevos Artistas"} link={"*"} artist_link={"Ver Mas"}></ArtistData>
        </section>
        <section id="album_explore">
            <AlbumData album_data={albumList} album_header={"Nuevos Albumes Lanzados"} link={"*"} album_link={"Ver Mas"}></AlbumData>
        </section>
        <section id="music_explore">
            <MusicData music_data={trackList} music_header={"Descubre Nueva Musica"} link={"*"} music_link={"Ver Mas"}></MusicData>
        </section>
    </section>
}

export default ContentExplore

