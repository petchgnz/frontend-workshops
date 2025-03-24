/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
type Props = {}

type Services = {
  icons: string,
  title: string,
  detail: string,
}

function ContentServices({ }: Props) {
  const servicesData: Services[] = [
    {
      icons: "faTruck",
      title: "Transportation",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum ut vel quod, voluptates aperiam natus eveniet. Consequatur, sequi aliquam!"
    },
    {
      icons: "faEnvelope",
      title: "Communication",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum ut vel quod, voluptates aperiam natus eveniet. Consequatur, sequi aliquam!"
    },
    {
      icons: "faGear",
      title: "Setting up",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum ut vel quod, voluptates aperiam natus eveniet. Consequatur, sequi aliquam!"
    },
    {
      icons: "faWhat",
      title: "Something",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum ut vel quod, voluptates aperiam natus eveniet. Consequatur, sequi aliquam!"
    },
  ]
  // // for testing
  // return (<div className="text-black font-bold">Hello</div>)

  return (
    <div className="container mx-auto p-3">
      <div className="grid grid-cols-4 gap-4 ">
        {servicesData.map((data, index) => (
          <div key={index} className="cursor-default p-4 border-2 border-[#dedede] text-center hover:bg-[#40c5d7] hover:text-white hover:border-white transition ease-in-out">
            <div className="">{data.icons}</div>
            <h3 className="text-xl font-semibold uppercase my-3">{data.title}</h3>
            <p className="">{data.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ContentServices