export function transferArtist(get_artist){
    
    let artist = {
        id_artist : get_artist.id,
        name : get_artist.name,
        followers : get_artist.followers.total,
        url_spotify: get_artist.external_urls.spotify,
        genres : get_artist.genres,
        popularity : getPopularity(get_artist.popularity),
        images: get_artist.images
    }

    return artist
}


export function listShortArtist(dataListArtist){
    
    let artist_list = []    
    dataListArtist.forEach(element => {
        artist_list.push(
            {
                id : element.id,
                name: element.name
            }
        )
    });
    return artist_list

}

function getPopularity(data_popularity){

    if(data_popularity > 90 && data_popularity <= 100){
        return "Muy Popular"
    }
    else if(data_popularity > 70 && data_popularity <= 89){
        return "Popular"
    }
    else if(data_popularity > 40 && data_popularity <= 69){
        return "Reconocido"
    }
    else if(data_popularity > 1 && data_popularity <=39){
        return "No tan conocido"
    }
    else{
        return "Desconocido"
    }

}

