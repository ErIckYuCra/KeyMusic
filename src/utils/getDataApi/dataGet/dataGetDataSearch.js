
import axios from 'axios'
import { transferSearch } from '../dataTransfer/transferSearch'





export async function getDataSearch(search="",type_search="",limit=10,data_token=""){
    
    let searchs = encodeURIComponent(search)


    const get_search = await axios.get('https://api.spotify.com/v1/search?q='+searchs+'&type='+type_search+"&limit="+limit,data_token)


    /*Modularizar esta parte*/
    let lista_result = []


    if(get_search.data.artists !== undefined){


        for (let index = 0; index < 3; index++) {
            lista_result.push(transferSearch(get_search.data.artists.items[index]))
            
        }

    }

    if(get_search.data.albums !== undefined){

        for (let index = 0; index < 3; index++) {
            lista_result.push(transferSearch(get_search.data.albums.items[index]))
            
        }

    }

    if(get_search.data.tracks !== undefined){

        for (let index = 0; index < 3; index++) {
            lista_result.push(transferSearch(get_search.data.tracks.items[index]))
            
        }
    }

    
    return lista_result

}

