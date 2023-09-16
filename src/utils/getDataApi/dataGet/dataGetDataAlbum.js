
import axios from 'axios'

import { transferTrack } from '../dataTransfer/transferTrack'
import { getListTransfer } from '../../getFunctionUtils/getListTransfer'
import { transferAlbum } from '../dataTransfer/transferAlbum'


export async function getAlbum(id_album="",data_token=""){
    const get_album = await axios.get('https://api.spotify.com/v1/albums/'+id_album,data_token)
    return transferAlbum(get_album.data)
}

export async function getAlbumTracks(id_album="",limit=10,data_token=""){

    const get_songs_album = await axios.get('https://api.spotify.com/v1/albums/'+id_album+'/tracks?limit='+limit,data_token)

    return getListTransfer(get_songs_album.data.items,transferTrack)

}


export async function getNewReleasepAlbum(limit=10,data_token=""){

    
    const get_new_release = await axios.get('https://api.spotify.com/v1/browse/new-releases?limit='+limit,data_token)

    return getListTransfer(get_new_release.data.albums.items,transferAlbum)

}



