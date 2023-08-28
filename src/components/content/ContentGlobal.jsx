import ContentAlbum from './album/ContentAlbum'
import Musica from './music/ContentMusic'
import Artista from './artist/ContentArtist'
import Genero from './genery/ContentGenery'
import Explorar from './explore/ContentExplore'
import ContentExplore from './explore/ContentExplore'

function ContentGlobal(){
    return <section id="seccion-principal">

        <ContentExplore></ContentExplore>


    </section>
}

export default ContentGlobal