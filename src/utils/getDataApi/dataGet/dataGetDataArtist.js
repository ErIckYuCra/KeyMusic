
import axios from 'axios'

import { getListTransfer } from '../../getFunctionUtils/getListTransfer'
import { transferAlbum } from '../dataTransfer/transferAlbum'
import { transferArtist } from '../dataTransfer/transferArtist'
import { transferTrack } from '../dataTransfer/transferTrack'


export async function getAlbumArtist(id_artist="",data_token=""){
    const get_album_artist = await axios.get('https://api.spotify.com/v1/artists/'+id_artist+'/albums',data_token)
    return getListTransfer(get_album_artist.data.items,transferAlbum)
}


export async function getArtist(id_artist="",data_token=""){
    const artist = await axios.get('https://api.spotify.com/v1/artists/'+id_artist,data_token)
    return transferArtist(artist.data)
}


export async function getListArtist(id_artist="",data_token=""){
    const artist_all = await axios.get('https://api.spotify.com/v1/artists?ids='+id_artist,data_token)
    return getListTransfer(artist_all.data.artists,transferArtist)
}

export async function getTopTracksArtist(id_artist="",data_token=""){
    const top_songs = await axios.get('https://api.spotify.com/v1/artists/'+id_artist+'/top-tracks?market=ES',data_token)
    return getListTransfer(top_songs.data.tracks,transferTrack)
}

export async function getRelatedArtist(id_artist="",data_token=""){
    const related_artist = await axios.get('https://api.spotify.com/v1/artists/'+id_artist+'/related-artists',data_token)
    return getListTransfer(related_artist.data.artists,transferArtist)
}

