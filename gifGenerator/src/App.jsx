import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return(
    <div className="bg-gradient-to-bl from-gray-900 to-slate-600 h-screen flex flex-col relative items-center overflow-x-hidden">
      
      <h1 className="text-slate-50 mt-10 border border-cyan-200 rounded-lg px-10 py-2 text-center text-3xl w-11/12 m-5">
      GIFFYs
      </h1>
    
      <div className="flex  w-10/12 items-center gap-7 h-screen">
        <Random/>
        <div className="w-[3px] h-[500px] right-0 bg-cyan-200"></div>
        <Tag/>
      </div>
      <div className="absolute bottom-0 left-0 text-4xl text-slate-800 font-bold">
        &copy;Dev Jawal
      </div>
    </div>
  );
}
