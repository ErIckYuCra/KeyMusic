import './HeaderSection.css'

function HeaderSection({titulo,link,titulo_link}){

    return <div className="header_section">

        <span>{titulo}</span>
        <a href={link}>{titulo_link}</a>

    </div>
}
export default HeaderSection