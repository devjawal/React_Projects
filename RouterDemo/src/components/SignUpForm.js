import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setLogged}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        accountType:"Student"
    })
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [accountType,setAccountType]=useState('Student');
    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setLogged(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");

    }


  return (
    <div className=" bg-richblack-900">
        {/* student-Instructor tab */}
        <div className='flex bg-richblack-800 rounded-full p-1 my-6 max-w-max'>
            <button
            className={`${accountType === "Student" ? 
                "bg-richblack-900 text-richblack-5"
                :
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-300`}
            onClick={()=>setAccountType("Student")}>
                Student
            </button>
            <button
            className={`${accountType === "Student" ? 
                "bg-transparent text-richblack-200"
            :
            "bg-richblack-900 text-richblack-5"} py-2 px-5 rounded-full transition-all duration-300`}
            onClick={()=>setAccountType("Instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* first name and lastName */}
            <div className='flex gap-x-4 mb-3 mt-4'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className='border-b-2 outline-none border-richblack-200 bg-richblack-700 rounded-md text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className='border-b-2 outline-none border-richblack-200 bg-richblack-700 rounded-md text-richblack-5 w-full p-[12px]'
                        />
                    </label>
            </div>
            {/* email Add */}
            <label className='w-full relative mt-4'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='border-b-2 outline-none border-richblack-200 bg-richblack-700 rounded-md text-richblack-5 w-full p-[12px]'
                    />
            </label>

            {/* createPassword and Confirm Password */}
            <div className='flex gap-x-4 mb-3 mt-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword1 ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='border-b-2 outline-none border-richblack-200 bg-richblack-700 rounded-md text-richblack-5 w-full p-[12px]'
                    />
                    <span 
                    className='absolute right-3 top-[38px] cursor-pointer ' onClick={() => setShowPassword1((prev) => !prev)}>
                        {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='border-b-2 outline-none border-richblack-200 bg-richblack-700 rounded-md text-richblack-5 w-full p-[12px]'
                    />
                    <span
                    className='absolute right-3 top-[38px] cursor-pointer ' onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
        <button className='w-full mt-4 px-[12px] py-[8px] bg-yellow-50 rounded-md'>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm
