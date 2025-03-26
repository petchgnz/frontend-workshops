/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */

type Props = {}

function Header({ }: Props) {
    return (
        // Header
        <div className="pt-3 border-t-5 mb-15 bg-[#333] border-[#40aed7] mx-auto text-white h-[120px]">
            <div className="container mx-auto ">
                {/* Header-grid */}
                <div className="grid items-center grid-cols-[255px_1fr] gap-10">
                    {/* Header-logo     */}
                    <div className="">
                        <h1 className="text-white font-bold  text-4xl uppercase ">Astounding</h1>
                        <p className="tracking-[2.5px] text-[14px]">Free PSD Website Templates</p>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                        <li className="list-none text-center items-center flex justify-center"><a href="/" className=" text-lg whitespace-nowrap m-4 p-2 after:block after:mt-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</a></li>
                        <li className="list-none text-center items-center flex justify-center"><a href="/" className=" text-lg whitespace-nowrap m-4 p-2 after:block after:mt-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Styledemo</a></li>
                        <li className="list-none text-center items-center flex justify-center"><a href="/" className=" text-lg whitespace-nowrap m-4 p-2 after:block after:mt-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Full Width</a></li>
                        <li className="list-none text-center items-center flex justify-center"><a href="/" className=" text-lg whitespace-nowrap m-4 p-2 after:block after:mt-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Dropdown</a></li>
                        <li className="list-none text-center items-center flex justify-center"><a href="/" className=" text-lg whitespace-nowrap m-4 p-2 after:block after:mt-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Portfolio</a></li>
                        <li className="list-none text-center items-center flex justify-center"><a href="/" className=" text-lg whitespace-nowrap m-4 p-2 after:block after:mt-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Gallery</a></li>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
