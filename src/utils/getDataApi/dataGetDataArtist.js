
import axios from 'axios'


export async function getAlbumArtist(id_artist="",data_token=""){

    const get_album_artist = await axios.get('https://api.spotify.com/v1/artists/'+id_artist+'/albums',data_token)
    return await get_album_artist.data
}


export async function getArtist(id_artist="",data_token=""){

    const artist = await axios.get('https://api.spotify.com/v1/artists/'+id_artist,data_token)
    return await artist.data

}

export async function getTopSongsArtist(id_artist="",data_token=""){
    const top_songs = await axios.get('https://api.spotify.com/v1/artists/'+id_artist+'/top-tracks?market=ES',data_token)
    return await top_songs.data
}

export async function getRelatedArtist(id_artist="",data_token=""){
    const related_artist = await axios.get('https://api.spotify.com/v1/artists/'+id_artist+'/related-artists',data_token)
    return await related_artist.data
}

