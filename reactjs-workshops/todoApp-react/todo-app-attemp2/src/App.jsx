import { useState } from "react";

export default function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  return (
    <div className="bg-bg1 w-screen h-screen text-white flex flex-col justify-center items-center ">
      <div className="text-2xl font-bold ">My Todos</div>

      {/* Container */}
      <div className="bg-bg2 m-5 p-[2%]">
        {/* todo-input */}
        <div className="min-w-[600px] h-auto grid gap-3 grid-cols-[1fr_1fr_80px] items-center border-b-2 border-white/25 pb-5 mb-5">
          {/* todo-input-items */}
          <div className="flex flex-col">
            <label className="font-bold mb-2 text-lg">Task</label>
            <input className="outline-none p-2 bg-white/10 text-white" type="text" placeholder="What's the task title?" />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-2 text-lg">Description</label>
            <input className="outline-none p-2 bg-white/10 text-white" type="text" placeholder="What's the task description?" />
          </div>

          <div className="flex justify-center mt-8">
            <button className="w-[60px] p-2 bg-emr cursor-pointer transition-all ease-in-out hover:bg-emerald-500 rounded-xs" type="button">Add</button>
          </div>
        </div>

        {/* todo-btn-area */}
        <div className="">
          <button className={`cursor-pointer w-[60px] p-2 ${isCompletedScreen ? "bg-[#686868]" : "bg-emr"}`} onClick={() => setIsCompletedScreen(false)}>Todo</button>
          <button className={`cursor-pointer p-2 ${isCompletedScreen ? "bg-emr" : "bg-[#686868]"}`} onClick={() => setIsCompletedScreen(true)}>Completed</button>
          {console.log(`isCompleted is : ${isCompletedScreen}`)}
        </div>
      </div>
    </div>
  );
}
