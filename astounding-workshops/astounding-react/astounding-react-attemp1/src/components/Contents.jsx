import ContentHeader from "./ContentHeader.jsx"
import ContentServices from "./ContentServices.jsx"
import ContentMeet from "./ContentMeet.jsx"
import ContentTeams from "./ContentTeams.jsx"
import './Contents.css'

function Contents() {
    return (
        <div className="contents">
            <ContentHeader />
            <ContentServices />
            <ContentMeet />
            <ContentTeams />
        </div>
    )
}

export default Contents