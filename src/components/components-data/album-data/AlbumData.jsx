import { useEffect, useState } from "react"
import { useToken } from "../../../hook/useToken"
import { getAlbum,getAlbumSongs,getTopAlbum } from "../../../utils/getDataApi/dataGetDataAlbum"




function AlbumData(){

    
    const token = useToken()

    async function getAlbumData(){
        let data = await  getAlbum("2XNkXhZxm2hcmarq2ZeXHX",token)
  
    }

    
    getAlbumData()






    return <section id="album-content-data">

    </section>
}

export default AlbumData