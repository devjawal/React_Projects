import React from 'react';
import Template from "../components/Template";
import loginImg from "../assets/login.png"
const Login=({setLogged})=>{
    return(
        <Template 
        title="Welcome Back"
        desc1="Build Skills for today, tommorrow and beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setLogged={setLogged}/>
    );
}
export default Login; 