import { listShortArtist } from "./transferArtist";


export function transferAlbum(get_album){

    let album = {
        id_album : get_album.id,
        artists : return_artist(get_album),
        images: get_album.images,
        tracks: get_album.total_tracks,
        name_album: get_album.name,
        url_spotify: get_album.external_urls.spotify,
        duration_ms: return_duration_ms(get_album),
        date: return_date(get_album)
    }
    return album
}

export function getShortAlbum(dataShortAlbum){
    return {
        id: dataShortAlbum.id,
        name : dataShortAlbum.name,
        images: dataShortAlbum.images
    }
}

function return_artist(album_get){
    if(album_get.artists == null){
        return null
    }
    else{
        return listShortArtist(album_get.artists)
    }
}

function return_duration_ms(album_get){
    if(album_get.tracks == null){
        return 0
    }
    else{
        return get_duration(album_get.tracks.items)
    }
}

function return_date(album_get){
    if(album_get.tracks == null){
        return album_get.release_date
    }
    else{
        return null
    }
}


function get_duration(lista){

    let duration = 0
    lista.forEach(element => {
        duration = element.duration_ms + duration
    });

    return duration
}