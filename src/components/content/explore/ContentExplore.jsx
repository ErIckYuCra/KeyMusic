import { useEffect, useState } from "react"

import './ContentExplore.css'
import { getSongList } from "../../../utils/getDataApi/dataGetSongsList"
import { useToken } from "../../../hook/useToken"
import { getNewReleasepAlbum,getAlbum } from "../../../utils/getDataApi/dataGetDataAlbum"




function ContentExplore(){

    const [newReleaseAlbum,setNewReleaseAlbum] = useState([])
    const [songList,setSongList] = useState([])
    const token = useToken()

    async function data(){
        const data_song = await  getSongList("37i9dQZEVXbNG2KDcFcKOF",token)
        const data_album = await getNewReleasepAlbum(token)
        setSongList(data_song) 
        setNewReleaseAlbum(data_album) 
    }

    useEffect(()=>{
        if(token !== null){
            data()
        }
    },[token])

    console.log(newReleaseAlbum)
    console.log(songList)
 
    

    return <section id="contenido-explore">

    </section>
}

export default ContentExplore

/*37i9dQZEVXbNG2KDcFcKOF*/