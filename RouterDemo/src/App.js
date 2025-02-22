import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute  from "./components/PrivateRoute";
function App() {
  const [isLoggedIn,setLogged]=useState(false);
  return(
    <div className="w-screen h-screen overflow-y-clip bg-richblack-900 flex flex-col">
      <div className="absolute text-richblack-700 text-4xl bottom-1">
        &copy;Dev Jawal
      </div>
      <Navbar isLoggedIn={isLoggedIn} setLogged={setLogged}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setLogged={setLogged}/>}/>
        <Route path="/signup" element={<Signup setLogged={setLogged}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
