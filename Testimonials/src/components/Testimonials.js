import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
function Testimonials(props){
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);

    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriseHandler(){
        let randomIndex=Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }
    return(
        <div className="w-[85vw] md:w-[700px] flex flex-col justify-center items-center p-10 mt-10 transition-all duration-300 hover:shadow-2xl">
            
                <Card review={reviews[index]}></Card>
                <div className="flex top-5 text-3xl mt-5 gap-3 text-violet-500 justify-center items-center">
                    <button
                    onClick={leftShiftHandler}
                    className="cursor-pointer hover:text-violet-600">
                        <FiChevronLeft/>
                    </button>
                    <button
                    onClick={rightShiftHandler}
                     className="cursor-pointer hover:text-violet-600"><FiChevronRight/></button>
                </div>
                <div className="mt-5">
                    <button 
                    onClick={surpriseHandler} 
                    className="bg-violet-500 hover:bg-violet-800 transition-all duration-300 py-2 px-10 rounded-lg text-white text-lg">
                       <span className="select-none"> Surprise Me</span>
                        </button>
                </div>
        </div>
    );
}
export default Testimonials;
