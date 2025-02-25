

import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

  const {gif,loading,fetchData} = useGif();

  return (
    <div className="w-10/12 flex flex-col gap-y-5 text-center items-center p-10">
      <h1 className="uppercase text-2xl font-bold  text-slate-300 mb-5">A Random Gif</h1>
      <div className=" ">
      {
        loading ? (<Spinner/>):(<img src={gif} alt="img1" className="object-cover h-[300px] w-[700px] rounded-lg"></img>)
      }
      </div>
      
      <button className="w-10/12 py-2 bg-gradient-to-r from-slate-500 to-slate-800 rounded-lg text-slate-300"
       onClick={()=>{
        fetchData();
      }}>Generate</button>
    </div>
  );
}
