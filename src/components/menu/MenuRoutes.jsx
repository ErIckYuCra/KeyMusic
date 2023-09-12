import {Routes, Route } from 'react-router-dom';
import ContentExplore from '../content/explore/ContentExplore';
import ContentMusic from '../content/music/ContentMusic';
import ContentArtist from '../content/artist/ContentArtist';
import ContentAlbum from '../content/album/ContentAlbum';


function MenuRoutes(){

    return <Routes>
        <Route path='/explorar' element={<ContentExplore></ContentExplore>}></Route>
        <Route path='/music' element={<ContentMusic></ContentMusic>}></Route>
        <Route path='/artista' element={<ContentArtist></ContentArtist>}></Route>
        <Route path='/album' element={<ContentAlbum></ContentAlbum>}></Route>
    
    </Routes>


}


export default MenuRoutes