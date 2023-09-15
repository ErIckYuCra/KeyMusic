import {Routes, Route } from 'react-router-dom';
import ContentExplore from '../content/explore/ContentExplore';
import ContentMusic from '../content/track/ContentMusic';
import ContentArtist from '../content/artist/ContentArtist';
import ContentAlbum from '../content/album/ContentAlbum';


function MenuRoutes(){

    return <Routes>
        <Route path='/explorar' element={<ContentExplore></ContentExplore>}></Route>
        <Route path='/music/:id_music' element={<ContentMusic></ContentMusic>}></Route>
        <Route path='/artista/:id_artista' element={<ContentArtist></ContentArtist>}></Route>
        <Route path='/album/:id_album' element={<ContentAlbum></ContentAlbum>}></Route>
    
    </Routes>


}


export default MenuRoutes