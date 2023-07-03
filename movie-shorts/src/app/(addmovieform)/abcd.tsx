'use client'

import {Fragment, useRef} from 'react'
import {Toaster} from "react-hot-toast"


export default function addfilm() {

    const nameRef = useRef<HTMLInputElement | null>(null);
    const summaryRef = useRef<HTMLTextAreaElement | null>(null);
    const handleSubmit = (e:any) => {
        e.preventDefault();
    console.log(nameRef.current?.value);
    console.log(summaryRef.current?.value); 
    };
    

  return (
    <Fragment>
        <Toaster/>
        <div className="w-full m-auto flex my-4">
            <div className="flex flex-col justify-center items-center m-auto">
                <p className="text-2xl text-fuchsia-600 font-bold p-3">Add New movies</p>
                <form onSubmit={handleSubmit}>
                    <input 
                    ref={nameRef} 
                    placeholder='Enter film name' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
                    </input>
                    <textarea 
                    ref={summaryRef} placeholder='Enter Film summery' className='rounded-md px-4 py-4 w-full my-2'></textarea>
                    <button className='font-semibold px-4 py-1 shadow-xl bg-orange-400 rounded-lg m-auto hover:bg-lime-700'>Submit</button>
                </form>
            </div>
        </div>
    </Fragment> 
  )
}
