import "./App.css";
import { useState } from "react";
function App() {
  const [count,setcount]=useState(0);
  function decreaseHandle(){
    setcount(count-1);
  }
  function increaseHandle(){
    setcount(count+1);
  }
  function resetHandle(){
    setcount(0);
  }
  return (
    
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#394151] gap-10 flex-col">
      <div className="text-[#0398d4] text-2xl ">
        Increment / Decrement
      </div>
      <div className="bg-white flex gap-10 justify-center text-[25px] py-3 text-[#344151] rounded-lg">
        <div onClick={decreaseHandle} className="border-r-2 text-center w-20 text-5xl hover:cursor-pointer">-</div>
        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>
        <div onClick={increaseHandle} className="border-l-2 text-center w-20 text-5xl hover:cursor-pointer">+</div>
      </div>
      <button onClick={resetHandle} className="bg-[#0398d4] text-lg text-white p-3 rounded w-[90px]">
        Reset
      </button>
    </div>

  );
}

export default App;
