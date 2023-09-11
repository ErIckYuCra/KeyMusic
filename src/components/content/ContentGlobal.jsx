import ContentAlbum from './album/ContentAlbum'
import Musica from './music/ContentMusic'
import Artista from './artist/ContentArtist'
import Genero from './genery/ContentGenery'
import Explorar from './explore/ContentExplore'
import ContentExplore from './explore/ContentExplore'
import ContentMusic from './music/ContentMusic'

function ContentGlobal(){
    return <section id="seccion-principal">

        <ContentMusic></ContentMusic>


    </section>
}

export default ContentGlobal