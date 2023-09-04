import { getShortAlbum } from "./transferAlbum"
import { listShortArtist } from "./transferArtist"


export function transferSongs(get_song) {
    let song = {

        id_song: get_song.id,
        name: get_song.name,
        artists: listShortArtist(get_song.artists),
        url_spotify: get_song.external_urls.spotify,
        preview_url: get_song.preview_url,
        album: return_album(get_song.album)

    }


    return song
}

function return_album(album_get) {
    if (album_get == null) {
        return null
    }
    else {
        return getShortAlbum(album_get)
    }
}