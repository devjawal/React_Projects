import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {

    const {page,handlePageChange,totalPages }=useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border py-2 fixed bottom-0 bg-white px-10' >
        <div className='flex justify-between gap-x-10 px-10 w-11/12'>
        <div className='flex gap-x-3'>
        {
                page > 1 && 
                <button
                className='rounded-md font-semibold hover:bg-slate-100 border px-4 py-1' onClick={()=>handlePageChange(page-1)}>
                    Previous
                </button>
            }
            {
                page < totalPages && 
                <button 
                className='rounded-md font-semibold border hover:bg-slate-100 px-4 py-1' onClick={()=>handlePageChange(page+1)}>
                    Next
                </button>
            }
        </div>
            
            <p className='text-sm md:text-[15px] py-2 font-bold'>Page {page} of {totalPages}  </p>
        </div>
    </div>
  )
}
