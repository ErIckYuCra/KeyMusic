
import axios from 'axios'


export async function getGenres(data_token=""){

    const get_genres = await axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds',data_token)
    return await get_genres.data

}


