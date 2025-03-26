/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */


type Props = {}

type TeamsContent = {
    pic: string,
    name: string,
    detail: string,
}


function ContentTeams({ }: Props) {

    const teamMembers: TeamsContent[] = [
        {
            pic: `https://placehold.co/250`,
            name: 'Barry Allen',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum est, commodi recusandae inventore sed harum.'
        },
        {
            pic: `https://placehold.co/250`,
            name: 'Wade Wilson',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum est, commodi recusandae inventore sed harum.'
        },
        {
            pic: `https://placehold.co/250`,
            name: 'Ken Soundbaht',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum est, commodi recusandae inventore sed harum.'
        },
        {
            pic: `https://placehold.co/250`,
            name: 'Petch Minimalizt',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum est, commodi recusandae inventore sed harum.'
        },
    ]

    return (
        <div className='my-15'>
            <div className="grid grid-cols-4 gap-5">
                {teamMembers.map((data) => {
                    return (
                        <div className=" p-2 text-center py-6">
                            <img src={data.pic} className="inline-block" />
                            <h1 className="text-2xl my-2">{data.name}</h1>
                            <p className="px-3 mb-4">{data.detail}</p>
                            <a href="#" className="text-center bg-gray-300 hover:bg-gray-500 transition-all hover:text-white ease-in-out p-[6px] rounded-sm">View profile</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ContentTeams