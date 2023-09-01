import { listShortArtist } from "./transferArtist";


export function transferAlbum(get_album){

    

    let album = {
        id_album : get_album.id,
        artists : listShortArtist(get_album.data.artists),
        images: get_album.images,
        tracks: get_album.total_tracks,
        name_album: get_album.name,
        url_spotify: get_album.external_urls.spotify,
        duration_ms: ()=>{
            if(get_album.tracks == null){
                return 0
            }
            else{
                return get_duration(get_album.tracks.items)
            }
        },
        date: ()=>{
            if(get_album.tracks == null){
                return get_album.release_date
            }
            else{
                return ""
            }
        }
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


function get_duration(lista){

    let duration = 0
    lista.forEach(element => {
        duration = element.duration_ms + duration
    });

    return duration
}