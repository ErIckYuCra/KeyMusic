import { useEffect, useState } from "react"
import { useToken } from "../../../hook/useToken"
import { getAlbum, getAlbumSongs, getTopAlbum } from "../../../utils/getDataApi/dataGetDataAlbum"
import "./AlbumData.css"
import { getNumberIndex } from "../../../utils/getNumberIndex"
import logo_spotify from "../../../assets/images/spotify.png"


function AlbumData({ album_data }) {
    

    console.log(album_data)

    return <section id="album-content-data">
        {album_data.map((album_d, index_album) => {
            return <div className="content_card_album" key={index_album}>
                
                <h1 id="contador">{getNumberIndex(index_album+1)}</h1>

                <div id="img_container">
                    <img src={album_d.images[2].url}></img>
                </div>

                <div id="link_container">
                    <h1>{album_d.name_album}</h1>
                    {album_d.artists.map((artist_d, index_artist) => {
                        return <span key={index_artist}>{artist_d.name}</span>
                    })}
                </div>

                <div id="info_container">
                    <h3>{album_d.tracks + " " + "canciones"}</h3>
                    <span>{album_d.date}</span>
                </div>
                

                <div id="logo_container">
                    <img id="logo_spotify" src={logo_spotify}/>
                </div>

               

            </div>
        })}
    </section>
}

export default AlbumData