
import axios from 'axios'
import { getListTransfer } from '../../getFunctionUtils/getListTransfer'
import { transferTrack } from '../dataTransfer/transferTrack'
export async function getTrackListPlayList(id_list ="",limit=10,data_token=""){



    const get_track_list = await axios.get('https://api.spotify.com/v1/playlists/'+id_list+'/tracks?limit='+limit,data_token)

    let listTrackPlaylist = []
    get_track_list.data.items.forEach(element => {
        listTrackPlaylist.push(element.track)
    });

    return getListTransfer(listTrackPlaylist,transferTrack)
}

