import { useEffect, useState } from "react"
import "./../../../assets/css/style_content.css"
import './ContentExplore.css'
import { getTrackListPlayList } from "../../../utils/getDataApi/dataGet/dataGetDataPlayList"
import { useToken } from "../../../hook/useToken"
import { getNewReleasepAlbum } from "../../../utils/getDataApi/dataGet/dataGetDataAlbum"
import AlbumData from "../../components-data/album-data/AlbumData"
import MusicData from "../../components-data/music-data/MusicData"
import ArtistData from "../../components-data/artist-data/ArtistData"
import { getListArtist } from "../../../utils/getDataApi/dataGet/dataGetDataArtist"
import HeaderSection from "../../components-element/reusable/HeaderSection"

function ContentExplore() {

    const [albumList, setAlbumList] = useState([])
    const [trackList, setTrackList] = useState([])
    const [artistList, setArtistList] = useState([])
    const token = useToken()

    async function getData() {
        const data_track = await getTrackListPlayList("37i9dQZF1DXdbXrPNafg9d", 4, token)
        const data_artist = await getListArtist("2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,3vKxuOGRkXJWpCZPf01Nj8,62r23J4b195KwCZIpRB2Jb,4PtVXWSOmF4Tox1jj6ctSq,1bXOJUefXiubpe3686KYFm", token)
        const data_album = await getNewReleasepAlbum(4, token)

        setArtistList(data_artist)
        setTrackList(data_track)
        setAlbumList(data_album)
    }

    useEffect(() => {
        if (token !== null) {
            getData()
        }
    }, [token])


    return <section id="contenido-explore">

        <section id="artist_explore">
            <div className="content_artist_css">
                <HeaderSection titulo={"Nuevos Artistas"} link={'*'} titulo_link={'Ver Mas'} ></HeaderSection >
                {artistList.map((artist_d, artist_i) => {
                    return <ArtistData key={artist_i} images={artist_d.images[0].url}  id={artist_d.id_artist} name={artist_d.name} followers={artist_d.followers}></ArtistData>
                })}

            </div>
        </section>

        <section id="album_explore">
            <div className="content_album_css">
                <HeaderSection titulo={"Nuevo Albumes Lanzados"} link={"*"} titulo_link={"Ver Mas"} ></HeaderSection >
                {albumList.map((album_d, album_i) => {
                    return <AlbumData key={album_i} index={album_i} images={album_d.images[0].url} id={album_d.id_album} name={album_d.name_album} artist={album_d.artists} tracks={album_d.tracks} date={album_d.date} url={album_d.url_spotify} ></AlbumData>
                })}
            </div>

        </section>

        <section id="music_explore">
            <div className="content_music_css">
                <HeaderSection titulo={"Descubre Nueva Musica"} link={"*"} titulo_link={"Ver Mas"} ></HeaderSection >
                {trackList.map((track_d, track_i) => {
                    return <MusicData key={track_i} index={track_i} images={track_d.album.images[0].url} id={track_d.id_song} id_album={track_d.album.id} album_name={track_d.album.name} name={track_d.name} url={track_d.url_spotify}></MusicData>
                })}
            </div>

        </section>

    </section >
}

export default ContentExplore


