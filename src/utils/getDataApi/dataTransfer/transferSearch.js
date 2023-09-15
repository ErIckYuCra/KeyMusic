export function transferSearch(result){
    let search = {
        id: result.id,
        tipo:get_name(result.type),
        nombre: result.name,
        url: url_type(result.type)
    }

    return search
}


function url_type(type){
    if(type === "artist"){
        return "artista"
    }
    else if(type === "album"){
        return "album"
    }
    else{
        return "music"
    }
}

function get_name(name){
    if(name === "artist"){
        return "Artista"
    }
    else if(name === "album"){
        return "Album"
    }
    else if(name=== "track"){
        return "Cancion"
    }
    else{
        return name
    }

}