import ContentHeader from "./ContentHeader.jsx"
import ContentServices from "./ContentServices.jsx"
import ContentMeet from "./ContentMeet.jsx"
import './Contents.css'

function Contents() {
    return (
        <div className="contents">
            <ContentHeader />
            <ContentServices />
            <ContentMeet />
        </div>
    )
}

export default Contents