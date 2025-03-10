import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";
function App() {
  const [tours,setTours] = useState(data);
  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id !== id);
    setTours(newTours);
  }
  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={()=>setTours(data)}> Refresh </button>
      </div>
    );
  } 
  return (
    <div className="App">
      <div class="noRead">
          &copy;Dev Jawal
      </div>  
      <Tours tours={tours} removeTour={removeTour}></Tours>
      
    </div>
  )
};

export default App;
