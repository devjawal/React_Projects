import React from "react";
import frame from "../assets/frame.png";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc";
const Template=({title,desc1,desc2,image,formtype,setLogged})=>{
    return(
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 ">
            <div className="w-11/12 max-w-[450px] mx-0">
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4 ">
                    <span 
                    className="text-richblack-100">{desc1}</span>
                    <br></br>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>

                {formtype === "signup"? (<SignUpForm setLogged={setLogged}/>):(<LoginForm setLogged={setLogged}/>)}

                <div className="flex w-full items-center my-4 gap-x-2 ">
                    <div className="bg-richblack-700 w-full h-[1px]"></div>
                    <p className="text-richblack-200 font-medium">Or</p>
                    <div className="bg-richblack-700 w-full h-[1px]"></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] border border-richblack-700 px-[12px] py-[8px] gap-x-2 my-6 text-richblack-100 b">
                    <FcGoogle/>
                    Sign In With Google
                </button>
            </div> 
            <div className="hidden md:block md:w-11/12 md:max-w-[450px] md:relative">
                <img className="rounded-lg" src={frame} width={558} height={504} alt="Pattern"/>
                <img className="absolute -top-3 right-3 rounded-lg" src={image} width={558} height={490} alt="Image1"/>
            </div>
        </div>
    );
}
export default Template;