import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
export const Blog = () => {

    //Consume Context:
    const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[650px] p-3 flex flex-col gap-y-7 mt-[70px] mb-[70px]'>
        {
            loading? (<Spinner/>):(
                posts.length === 0 ? (
                    <div>
                        <p>Posts Not Found</p>
                    </div>
                ):(
                    posts.map((post)=>( 
                        <div key={post.id}>
                            <p className='mt-2  text-red-600 font-extrabold mb-2'>{post.title}</p>
                            <p>By <span className='italic text-sm'>{post.author}</span> on <span className='font-bold underline text-sm'>{post.category}</span></p>
                            <p className='text-sm mb-2'>
                                Posted on {post.date}
                            </p>
                            <p className='text-sm mb-3'>{post.content}</p>
                            <div className='flex gap-x-3 flex-wrap'>

                                {post.tags.map((tag,index)=>{
                                    return <span key={index} className='text-blue-500 cursor-pointer font-bold text-xs underline'>{`#${tag}`}  </span>
                                })}
                                
                            </div>
                        </div>

                    ))
                )
            )
        }
    </div>
  )
}
