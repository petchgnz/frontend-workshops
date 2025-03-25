/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import ContentHead from "./Contents/ContentHead"
import ContentServices from "./Contents/ContentServices"
import ContentTeams from "./Contents/ContentTeams"

type Props = {}

function Contents({ }: Props) {
  return (
    <div>
      <ContentHead />
      <ContentServices />
      <div className="container mx-auto text-center my-20 text-9xl font-bold text-[#a5a5a5] capitalize">meet our team</div>
      <ContentTeams />
    </div>
  )
}
export default Contents