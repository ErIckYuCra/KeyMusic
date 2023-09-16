import { getFollowerChar } from "../../../utils/getFunctionUtils/getFollowersChar"

import "./InfoArtistData.css"

function InfoArtistData({ images, name, popularity, followers, url, genres }) {

    return <div id="info_content">
        <div id="info_image">
            <img src={images} alt="" />
        </div>
        <div id="info_data">
            <h4>Artista</h4>
            <h2>{name}</h2>
            <div id="indo_follow">
                <span>{popularity}</span>
                <span>{getFollowerChar(followers) + " seguidores"}</span>
                <span><a href={url}>Ver Perfil</a></span>
            </div>
            <div id="info_genres">
                {genres.map((genre_d, index_genres) => (
                    <span key={index_genres}>
                        {genre_d}
                    </span>
                ))}
            </div>
        </div>
    </div>

}

export default InfoArtistData