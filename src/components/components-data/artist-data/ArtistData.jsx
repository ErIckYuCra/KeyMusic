import { NavLink } from 'react-router-dom'
import { getFollowerChar } from '../../../utils/getFunctionUtils/getFollowersChar'
import HeaderSection from '../../components-element/reusable/HeaderSection.jsx'
import './ArtistData.css'

function ArtistData({images,id,name,followers,handlerSetStateID}) {

    function validateHandler(){
        if(handlerSetStateID !== undefined){
            handlerSetStateID(id)
        }
        console.log(id)
    }

    return <div className='container_artist_data'>
        <div className='container_img_artist'>
            <img src={images} />
        </div>
        <div className='container_info_artist'>
            <h3><NavLink to={"/artista/" + id} onClick={validateHandler}>{name}</NavLink></h3>
            <span>{getFollowerChar(followers) + ' seguidores'}</span>
        </div>
    </div>



}

export default ArtistData

