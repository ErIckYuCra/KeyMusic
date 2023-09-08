
import axios from 'axios'
import { transferSongs } from './dataTransfer/transferSong';


export async function getSongList(id_list ="",data_token=""){

    const get_songs_list = await axios.get('https://api.spotify.com/v1/playlists/'+id_list+'/tracks',data_token)

    let lista_songs = []



    get_songs_list.data.items.forEach(element => {
        lista_songs.push(transferSongs(element.track))
    });
    
    return lista_songs


}

