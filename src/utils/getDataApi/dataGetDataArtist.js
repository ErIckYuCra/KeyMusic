
import axios from 'axios'
import { transferAlbum } from './dataTransfer/transferAlbum';
import { transferArtist } from './dataTransfer/transferArtist';
import { transferSongs } from './dataTransfer/transferSong';


export async function getAlbumArtist(id_artist="",data_token=""){

    const get_album_artist = await axios.get('https://api.spotify.com/v1/artists/'+id_artist+'/albums',data_token)
    
    let list_album = []
    get_album_artist.data.items.forEach(element => {
        list_album.push(transferAlbum(element))
    });

    return list_album
}


export async function getArtist(id_artist="",data_token=""){

    const artist = await axios.get('https://api.spotify.com/v1/artists/'+id_artist,data_token)
    return transferArtist(artist.data)

}


export async function getAllArtist(id_artist="",data_token=""){

    const artist_all = await axios.get('https://api.spotify.com/v1/artists?ids='+id_artist,data_token)


    let lista_artists = []


    artist_all.data.artists.forEach(element => {
        lista_artists.push(transferArtist(element))
    });

    return lista_artists


}

export async function getTopSongsArtist(id_artist="",data_token=""){
    const top_songs = await axios.get('https://api.spotify.com/v1/artists/'+id_artist+'/top-tracks?market=ES',data_token)
    let lista_songs = []


    top_songs.data.tracks.forEach(element => {
        lista_songs.push(transferSongs(element))
    });
    
    return lista_songs
}

export async function getRelatedArtist(id_artist="",data_token=""){
    const related_artist = await axios.get('https://api.spotify.com/v1/artists/'+id_artist+'/related-artists',data_token)

    let lista_artists = []


    related_artist.data.artists.forEach(element => {
        lista_artists.push(transferArtist(element))
    });

    return lista_artists
}

