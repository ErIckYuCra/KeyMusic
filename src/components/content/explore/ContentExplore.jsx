import { useEffect, useState } from "react"

import './ContentExplore.css'
import { getSongList } from "../../../utils/getDataApi/dataGetSongsList"
import { useToken } from "../../../hook/useToken"
import { getNewReleasepAlbum,getAlbum, getAlbumSongs } from "../../../utils/getDataApi/dataGetDataAlbum"
import AlbumData from "../../components-data/album-data/AlbumData"
import MusicData from "../../components-data/music-data/MusicData"
import ArtistData from "../../components-data/artist-data/ArtistData"




function ContentExplore(){

    const [newReleaseAlbum,setNewReleaseAlbum] = useState([])
    const [songList,setSongList] = useState([])
    const [artistList,setArtistList] = useState([])
    const token = useToken()

    


    async function data(){
        const data_song = await  getSongList("37i9dQZEVXbNG2KDcFcKOF",token)
        const data_album = await getNewReleasepAlbum(token)
        
        let number_data_song = []
        let number_data_album = []

        for (let index = 0; index < 7; index++) {
            number_data_song.push(data_song[index])
            number_data_album.push(data_album[index])
        }
        
        
        setSongList(number_data_song) 
        setNewReleaseAlbum(number_data_album) 
        
    }

    useEffect(()=>{
        if(token !== null){
            data()
        }
    },[token])

 
    return <section id="contenido-explore">

        <AlbumData album_data={newReleaseAlbum}></AlbumData>
        <MusicData music_data={songList}></MusicData>
      

    </section>
}

export default ContentExplore

