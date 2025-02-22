import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const Navbar=(props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setLogged=props.setLogged;
    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={logo} width={160} height={32} alt="logo"/>
            </Link>
            <nav className="hidden md:block ">
                <ul className="flex gap-x-6 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-x-4 ml-3">
                {!isLoggedIn &&
                    <Link to="/login" >
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-md border border-richblack-700" onClick={()=>{
                        setLogged(true);
                        toast.success("Logged In");
                        }}>
                           Login
                        </button>
                    </Link>
                    
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-md border  border-richblack-700">
                            Signup
                        </button>
                    </Link>
                    
                }
                {
                    isLoggedIn &&
                    <Link to="/">
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-md border  border-richblack-700"
                         onClick={()=>{
                            setLogged(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out
                        </button>
                    </Link>
                    
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-md border  border-richblack-700">
                            Dashboard
                        </button>
                    </Link>
                    
                }
            </div>
        </div>
    )
}
export default Navbar;