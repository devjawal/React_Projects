import React from "react";
import Card from "./Card";
import { useState } from 'react';
function Cards(props){
    let courses=props.courses;
    let category=props.category;

    console.log(courses);
    const [likedCourses,setLikedCourses]= useState([]);
    function getCourses(){
        if(category==='All'){
            let allCourses=[];
            Object.values(courses).forEach(array=>{
                array.forEach((courseData)=>{
                    allCourses.push(courseData);
                })
                
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
        
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            
            {
              getCourses().map( (course) =>{
                  return <Card key={course.id}
                   course={course}
                   setLikedCourses={setLikedCourses}
                   likedCourses={likedCourses}/>
                })
            }
            
        </div>
    );

}
export default Cards;