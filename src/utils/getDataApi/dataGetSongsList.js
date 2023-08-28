
import axios from 'axios'


export async function getSongList(id_list ="",data_token=""){

    const get_songs_list = await axios.get('https://api.spotify.com/v1/playlists/'+id_list+'/tracks',data_token)
    return await get_songs_list.data

}

