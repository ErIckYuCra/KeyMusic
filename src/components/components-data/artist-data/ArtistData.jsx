import { NavLink } from 'react-router-dom'
import { getFollowerChar } from '../../../utils/getFunctionUtils/getFollowersChar'
import HeaderSection from '../../components-element/reusable/HeaderSection.jsx'
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
                        <h3><NavLink to={"/artista/"+artist_d.id_artist}>{artist_d.name}</NavLink></h3>
                        <span>{getFollowerChar(artist_d.followers) + ' seguidores'}</span>
                    </div>
                </div>
            })}
        </section>
    </section>


}

export default ArtistData

    