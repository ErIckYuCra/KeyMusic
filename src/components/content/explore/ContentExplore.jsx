import { useEffect, useState } from "react"

import './ContentExplore.css'
import { getSongList } from "../../../utils/getDataApi/dataGetSongsList"
import { useToken } from "../../../hook/useToken"
import { getNewReleasepAlbum,getAlbum } from "../../../utils/getDataApi/dataGetDataAlbum"
import { getSong } from "../../../utils/getDataApi/dataGetDataSongs"
import { getArtist, getRelatedArtist } from "../../../utils/getDataApi/dataGetDataArtist"





function ContentExplore(){

    const [newReleaseAlbum,setNewReleaseAlbum] = useState([])
    const [songList,setSongList] = useState([])
    const token = useToken()

    


    async function data(){
        const data_song = await  getSongList("37i9dQZEVXbNG2KDcFcKOF",token)
        const data_album = await getNewReleasepAlbum(token)
        const data_getSong = await getSong("7x9aauaA9cu6tyfpHnqDLo",token)
        const data_artist = await getArtist("3vKxuOGRkXJWpCZPf01Nj8",token)
        const related_artist = await getRelatedArtist("3vKxuOGRkXJWpCZPf01Nj8",token)
        console.log(related_artist)
        console.log(data_album.albums.items)

        setSongList(data_song) 
        setNewReleaseAlbum(data_album) 
        
    }

    useEffect(()=>{
        if(token !== null){
            data()
        }
    },[token])

 
    return <section id="contenido-explore">

    </section>
}

export default ContentExplore

