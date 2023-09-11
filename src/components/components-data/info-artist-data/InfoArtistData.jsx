import { getFollowerChar } from "../../../utils/getFollowersChar"

import "./InfoArtistData.css"

function InfoArtistData({ one_artist_data }) {

    function get_data_cahr_followers() {
        if (one_artist_data.followers !== undefined) {
            return getFollowerChar(one_artist_data.followers)
        }
    }

    function get_data_img() {
        if (one_artist_data.images !== undefined) {
            return <img src={one_artist_data.images[0].url} alt="" />

        }
    }



    return <section id="info-artist-content-data">

        <div id="info_content">
            <div id="info_image">
                {get_data_img()}
            </div>
            <div id="info_data">
                <h4>Artista</h4>
                <h2>{one_artist_data.name}</h2>
                <div id="indo_follow">
                    <span>{one_artist_data.popularity}</span>
                    <span>{get_data_cahr_followers()}</span>
                    <span>Ver Perfil</span>
                </div>
                <div id="info_genres">
                    {one_artist_data.genres !== undefined && (
                        one_artist_data.genres.map((genre_d, index_genres) => (
                            <span key={index_genres}>
                                {genre_d}
                            </span>
                        ))
                    )}
                </div>
            </div>
        </div>

    </section>
}

export default InfoArtistData