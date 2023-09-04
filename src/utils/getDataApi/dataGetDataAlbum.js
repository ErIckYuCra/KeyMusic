
import axios from 'axios'
import { transferAlbum } from './dataTransfer/transferAlbum'
import { transferSongs } from './dataTransfer/transferSong'


export async function getAlbum(id_album="",data_token=""){

    const get_album = await axios.get('https://api.spotify.com/v1/albums/'+id_album,data_token)

    return transferAlbum(get_album.data)

}

export async function getAlbumSongs(id_album="",data_token=""){

    const get_songs_album = await axios.get('https://api.spotify.com/v1/albums/'+id_album+'/tracks',data_token)

    let lista_songs = []


    get_songs_album.data.items.forEach(element => {
        lista_songs.push(transferSongs(element))
    });
    
    return lista_songs

}


export async function getNewReleasepAlbum(data_token){

    
    const get_new_release = await axios.get('https://api.spotify.com/v1/browse/new-releases',data_token)
    
    let list_album = []

    get_new_release.data.albums.items.forEach(element => {
        list_album.push(transferAlbum(element))
    });
    
    return list_album

}



