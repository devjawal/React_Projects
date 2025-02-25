
import { useState } from "react";
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";
export default function Tag() {
  


  const [tag,setTag]=useState('');

  const {gif,loading,fetchData} = useGif(tag);

  return (
    <div className="w-10/12 
     flex flex-col gap-y-5 text-center items-center p-10">
      <h1 className="uppercase text-2xl font-bold text-slate-300 mb-5">Search Gif</h1>
      <div className="">
      {
        loading ? (<Spinner/>):(<img src={gif} alt="img1" className="object-cover h-[300px] w-[700px] rounded-lg"></img>)
      }
      </div>
      

      <input
      onChange={(event)=>{
        setTag(event.target.value)
      }} value={tag} 
      placeholder="Enter GIF"
      className="w-10/12 py-2 rounded-lg bg-black font-semibold text-slate-400 text-center"></input>
      
      <button className="text-slate-200
      bg-gradient-to-r from-slate-500 to-slate-800
      w-10/12 py-2 rounded-lg bg-green-300 "
       onClick={()=>{
        fetchData(tag);
      }}>Generate</button>
    </div>
  );
}
