
import axios from 'axios'


export async function getSong(id_song="",data_token=""){
    const song = await axios.get('https://api.spotify.com/v1/tracks/'+id_song,data_token)
    return await song.data
}

export async function getAudioFeatures(id_song="",data_token=""){
    const audio_features = await axios.get('https://api.spotify.com/v1/audio-features/'+id_song,data_token)
    return await audio_features.data
}

export async function getAudioAnalysis(id_song="",data_token=""){
    const audio_analysis = await axios.get('https://api.spotify.com/v1/audio-analysis/'+id_song,data_token)
    return await audio_analysis.data
}

export async function getRecommendations(id_song ='',id_artist='',genres_string='',data_token=""){

    let uri = createUri(id_song,id_artist,genres_string,'&')
    const recommendations = await axios.get('https://api.spotify.com/v1/recommendations?'+uri,data_token)
    return await recommendations.data
}


function createUri(id_song,id_artist,genres_string,character){

    /*Cambiar Esto por un solo parametro que sea una lista para poder introducir todos los valores seed_???=????*/
    let uri = ''
    let song = 'seed_tracks='+id_song
    let artist = 'seed_artists='+id_artist
    let genres = 'seed_genres='+encodeURIComponent(genres_string)
    let lista_elementos = []

    if(id_artist != ''){
        lista_elementos.push(artist)
    }
    if(genres_string != ''){
        lista_elementos.push(genres)
    }
    if(id_song != ''){
        lista_elementos.push(song)
    }
   
    

    if(lista_elementos.length >= 2){
        for (let index = 0; index < lista_elementos.length; index++) {
            if(index < lista_elementos.length-1){
                uri = lista_elementos[index]+character
            }
            else{
                uri = uri + lista_elementos[index]
            }
        }
    }
    else{
        uri = lista_elementos[0]
    }

    return uri
}