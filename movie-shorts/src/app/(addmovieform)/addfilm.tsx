'use client'

import {Fragment, useRef} from 'react'
import {Toaster,Toast, toast} from "react-hot-toast";
const postfilm =async ({name,summary}:{name:string,summary:string}) =>{
 const res = fetch("http://localhost:3000/api/filmadd",{
    method:"POST",
    body: JSON.stringify({name,summary}),
    //@ts-ignore
    "Content-Type":"application/json",
});
return (await res).json();
};


const addfilm = () => {

    const nameRef = useRef<HTMLInputElement | null>(null);
    const summaryRef = useRef<HTMLTextAreaElement | null>(null);
    const handleSubmit = async (e:any) => {
        e.preventDefault();
    if (nameRef.current && summaryRef.current){
        toast.loading("sendi request",{id:"1"});
        await postfilm({
            name:nameRef.current?.value,
            summary:summaryRef.current?.value,
        });
        toast.success("Posted successfully",{id:"1"});
    }
    };
  

    return(
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

                    <select className='rounded-md px-4 py-2 my-2 w-full'>
                        <option>---Select Film Category---</option>
                        <option>Action</option>
                    </select>

                    <input 
                    ref={nameRef} 
                    placeholder='Director name' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
                    </input>

                    <input 
                    ref={nameRef} 
                    placeholder='Cast Member' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
                    </input>

                    <textarea 
                    ref={summaryRef} placeholder='Enter Film summery' className='rounded-md px-4 py-4 w-full my-2'></textarea>

                    <div className='image'> </div>

                    <button className='font-semibold px-4 py-1 shadow-xl bg-orange-400 rounded-lg m-auto hover:bg-lime-700'>Submit</button>
                    <button type='reset' className='font-semibold px-4 py-1 shadow-xl bg-orange-400 rounded-lg m-auto hover:bg-lime-700'>clear</button>


                    
                </form>
            </div>
        </div>
    </Fragment> 
    )
};

export default addfilm;