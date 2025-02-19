import React from "react";
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

function Card(props){
    let review=props.review;
    return(
        <div className="flex flex-col md:relative ">
            <div className=" hidden md:block md:absolute top-[-7rem] z-[10] mx-auto">
                <img
                className="rounded-full w-[140px] h-[140px] z-[25] aspect-square" alt="" src={review.image}/>
                <div className="w-[140px] h-[140px] rounded-full bg-violet-500 absolute  top-[-7px] left-[10px] z-[-1]"></div>
            </div>
            <img src={review.image} alt=" " className="relative -mt-8 mx-auto md:hidden rounded-full w-[140px] h-[140px] z-[25] aspect-square"></img>
            <div className="text-center text-violet-100 mt-7">
                <p className="font-bold text-2xl capitalize">{review.name}</p>
            </div>
            <div className="text-center mt-7" >
                <p className="uppercase text-violet-300 text-sm">{review.job}</p>
            </div>
            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft className="text-indigo"/>
            </div>
            <div className="text-center text-indigo-200 mt-4">
                {review.text}
            </div>
            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>
            
        </div>
    );
}
export default Card;
