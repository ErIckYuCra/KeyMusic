
import axios from 'axios'
import { transferAlbum } from './dataTransfer/transferAlbum'


export async function getAlbum(id_album="",data_token=""){

    const get_album = await axios.get('https://api.spotify.com/v1/albums/'+id_album,data_token)

    return transferAlbum(get_album.data)

}

export async function getAlbumSongs(id_album="",data_token=""){

    const get_songs_album = await axios.get('https://api.spotify.com/v1/albums/'+id_album+'/tracks',data_token)

    return await get_songs_album.data

}


export async function getNewReleasepAlbum(data_token){
    
    const get_new_release = await axios.get('https://api.spotify.com/v1/browse/new-releases',data_token)
    return await get_new_release.data

}



