import { getFollowerChar } from '../../../utils/getFollowersChar'
import HeaderSection from '../../content/reusable/HeaderSection'
import './ArtistData.css'

function ArtistData({ artist_data,artist_header,link,artist_link }) {

    return <section id='artist-content-data'>

        <HeaderSection titulo = {artist_header} link = {link} titulo_link = {artist_link} ></HeaderSection >
        <section id="artist-contentainer">
            {artist_data.map((artist_d, index_artist) => {
                return <div key={index_artist} className='container_artist_data'>
                    <div className='container_img_artist'>
                        <img src={artist_d.images[0].url} />
                    </div>
                    <div className='container_info_artist'>
                        <h3>{artist_d.name}</h3>
                        <span>{getFollowerChar(artist_d.followers) + ' seguidores'}</span>
                    </div>
                </div>
            })}
        </section>
    </section>


}

export default ArtistData

    