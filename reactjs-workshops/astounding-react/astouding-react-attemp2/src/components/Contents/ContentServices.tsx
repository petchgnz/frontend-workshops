/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faGear, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Props = {
}

type Services = {
    icons: IconProp,
    title: string,
    detail: string,
}

function ContentServices({ }: Props) {
    const servicesData: Services[] = [
        {
            icons: faTruck,
            title: "Transportation",
            detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum ut vel quod, voluptates aperiam natus eveniet. Consequatur, sequi aliquam!"
        },
        {
            icons: faComment,
            title: "Communication",
            detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum ut vel quod, voluptates aperiam natus eveniet. Consequatur, sequi aliquam!"
        },
        {
            icons: faHeart,
            title: "Something",
            detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum ut vel quod, voluptates aperiam natus eveniet. Consequatur, sequi aliquam!"
        },
        {
            icons: faGear,
            title: "Setting",
            detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum ut vel quod, voluptates aperiam natus eveniet. Consequatur, sequi aliquam!"
        },
    ]

    return (
        <div className="container mx-auto p-3">
            <div className="grid grid-cols-4 gap-4 ">
                {servicesData.map((data, index) => (
                    <div key={index} className="cursor-default p-4 border-2 border-[#dedede] text-center hover:bg-[#40c5d7] hover:text-white hover:border-white transition ease-in-out">
                        <FontAwesomeIcon icon={data.icons} className='text-8xl my-[10px]' />
                        <h3 className="text-xl font-semibold uppercase my-3 border-b-2 pb-3 border-[#e4e4e4]">{data.title}</h3>
                        <p className="">{data.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ContentServices