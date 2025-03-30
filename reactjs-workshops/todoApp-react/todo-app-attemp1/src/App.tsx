import { useState } from "react"

function App() {
    const [isCompleteScreen, setIsCompleteScreen] = useState(false)

    return (
        <div className="">
            <h1 className="text-center text-4xl font-bold my-5">My Todos</h1>

            <div className="todo-wrapper bg-[#353434] mt-2 max-h-[80vh] shadow-2xl overflow-y-auto p-[2%] w-fit mx-auto">
                <div className="todo-input flex items-center justify-center border-gray-600 border-b-2 pb-8 mb-8">
                    <div className="todo-input-item">
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder="What's the task title?" className="focus:outline-none" />
                    </div>
                    <div className="todo-input-item">
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder="What's the task description?" className=" focus:outline-none focus:border-5 focus:border-green-400" />
                    </div>
                    <div className="todo-input-item">
                        <button type="button" className="cursor-pointer bg-green-500 border-none w-[60px] p-2 mt-[33px] transition-all ease-in-out hover:bg-green-600">Add</button>
                    </div>
                </div>
                <div className="btn-area">
                    {/* <button className={`p-2 transition-all ease-in-out cursor-pointer w-[60px] border-none ${isCompleteScreen === false ? "bg-green-500" : "bg-[#686868]"}`} onClick={() => setIsCompleteScreen(false)}>Todo</button>
                    <button className={`p-2 transition-all ease-in-out cursor-pointer border-none ${isCompleteScreen === false ? "bg-[#686868]" : "bg-green-500"}`} onClick={() => setIsCompleteScreen(true)} >Completed</button> */}

                    <button className={`p-2 transition-all ease-in-out cursor-pointer w-[60px] border-none ${isCompleteScreen === false ? "bg-green-500" : "bg-[#686868]" }`} onClick={() => setIsCompleteScreen(false)}>Todo</button>
                    <button className={`p-2 transition-all ease-in-out cursor-pointer border-none ${isCompleteScreen === true ? "bg-green-500" : "bg-[#686868]" }`} onClick={() => setIsCompleteScreen(true)} >Completed</button>
                </div>

                <div className="todo-list" >
                    <div className="todo-list-item">
                        <h3>Task 1</h3>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
