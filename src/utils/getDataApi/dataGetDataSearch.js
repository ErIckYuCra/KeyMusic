
import axios from 'axios'


export async function getDataSearch(search="",type_search="",data_token=""){

    
    let search = encodeURIComponent(search)

    const get_search = await axios.get('https://api.spotify.com/v1/search?q='+search+'&type='+type_search,data_token)
    return await get_search.data

}

