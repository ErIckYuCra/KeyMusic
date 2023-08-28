import './getToken.js'

export function getHeader(access_token){
    
    
    const cabecera =  {headers:{'Authorization': 'Bearer '+access_token}}

    return cabecera

}