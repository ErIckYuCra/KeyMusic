
import axios from 'axios'

var album = {
    id_album : "",
    artist : [],
    image_url : [],
    tracks: 0,
    name_album: "",
    url_spotify: "",
    duration_ms: 0
}

function get_duration(lista){

    let duration = 0
    lista.forEach(element => {
        duration = element.duration_ms + duration
    });

    return duration

}

export async function getAlbum(id_album="",data_token=""){

    const get_album = await axios.get('https://api.spotify.com/v1/albums/'+id_album,data_token)

    album.id_album = get_album.data.id
    album.artist = get_album.data.artists
    album.image_url = get_album.data.images
    album.tracks = get_album.data.total_tracks
    album.name_album = get_album.data.name
    album.url_spotify = get_album.data.external_urls.spotify
    album.duration_ms = get_duration(get_album.data.tracks.items)
    
    console.log(album)


    return await album

}

export async function getAlbumSongs(id_album="",data_token=""){

    const get_songs_album = await axios.get('https://api.spotify.com/v1/albums/'+id_album+'/tracks',data_token)
    return await get_songs_album.data

}


export async function getNewReleasepAlbum(data_token){
    
    const get_new_release = await axios.get('https://api.spotify.com/v1/browse/new-releases',data_token)
    return await get_new_release.data

}



