import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData,apiUrl } from "./data";
import { toast } from "react-toastify";
import {useEffect } from "react";

const App = () => {
  const [courses,setCourses]=useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  async  function fetchData(){
    setLoading(true);
    try{
      let res= await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    }
    catch(e){
      toast.error("Network issue");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])//Starting me run hoga when App is rendered
  
  return(
    <div className="min-h-screen  flex flex-col bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
      <div >
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/> 
      </div>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
    
  );
};

export default App;
