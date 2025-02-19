import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";
const App = () => {
  
  return(

      <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gradient-to-tr from-slate-900 to-indigo-700">
        <div className="text-center ">
          <h1 className="text-4xl text-violet-200 rounded-2xl p-6 font-bold">Our Testimonials</h1>
          <div className="bg-violet-500 h-[4px] w-[1/5] mt-1">  </div>
          <Testimonials reviews={reviews}/>
          <div className="text-[30px] font-bold text-indigo-900 mb-0 -ml-[450px] ">
            &copy;Dev Jawal
          </div>
        </div>
      </div>
    
  );
};

export default App;
