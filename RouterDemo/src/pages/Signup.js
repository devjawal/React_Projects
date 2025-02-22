import React from 'react';
import Template from "../components/Template";
import SignupImg from "../assets/signup.png";
const Signup=({setLogged})=>{
    return(
        <Template 
        title="Welcome Back"
        desc1="Build Skills for today, tommorrow and beyond."
        desc2="Education to future-proof your career."
        image={SignupImg}
        formtype="signup"
        setLogged={setLogged}/>
    );
}
export default Signup;