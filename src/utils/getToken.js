
import dataApi from './dataApi.js'
import axios from 'axios'

const body = `grant_type=client_credentials&client_id=${dataApi.clientId}&client_secret=${dataApi.clientSecret}`



export async function getToken(){
   
    const dataToken = await axios.post(dataApi.urlToken, body,dataApi.header)
    return dataToken.data
}

