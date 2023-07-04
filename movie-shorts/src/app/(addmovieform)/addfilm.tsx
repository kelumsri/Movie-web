'use client'

// import {Fragment, useRef} from 'react'
// import {Toaster,Toast, toast} from "react-hot-toast";
// const postfilm =async ({name,summary}:{name:string,summary:string}) =>{
//  const res = fetch("http://localhost:3000/api/filmadd",{
//     method:"POST",
//     body: JSON.stringify({name,summary}),
//     //@ts-ignore
//     "Content-Type":"application/json",
// });
// return (await res).json();
// };


// const addfilm = () => {

//     const nameRef = useRef<HTMLInputElement | null>(null);
//     const summaryRef = useRef<HTMLTextAreaElement | null>(null);
//     const handleSubmit = async (e:any) => {
//         e.preventDefault();
//     if (nameRef.current && summaryRef.current){
//         toast.loading("sendi request",{id:"1"});
//         await postfilm({
//             name:nameRef.current?.value,
//             summary:summaryRef.current?.value,
//         });
//         toast.success("Posted successfully",{id:"1"});
//     }
//     };
  

//     return(
//         <Fragment>
//         <Toaster/>
//         <div className="w-full m-auto flex my-4">
//             <div className="flex flex-col justify-center items-center m-auto">
//                 <p className="text-2xl text-fuchsia-600 font-bold p-3">Add New movies</p>
//                 <form onSubmit={handleSubmit}>
//                     <input 
//                     ref={nameRef} 
//                     placeholder='Enter film name' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
//                     </input>

//                     <select className='rounded-md px-4 py-2 my-2 w-full'>
//                         <option>---Select Film Category---</option>
//                         <option>Action</option>
//                     </select>

//                     <input 
//                     ref={nameRef} 
//                     placeholder='Director name' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
//                     </input>

//                     <input 
//                     ref={nameRef} 
//                     placeholder='Cast Member' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
//                     </input>

//                     <input 
//                     ref={nameRef} 
//                     placeholder='Image url' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
//                     </input>

//                     <textarea 
//                     ref={summaryRef} placeholder='Enter Film summery' className='rounded-md px-4 py-4 w-full my-2'></textarea>

                    

//                     <button className='font-semibold px-4 py-1 shadow-xl bg-orange-400 rounded-lg m-auto hover:bg-lime-700'>Submit</button>
//                     <button type='reset' className='font-semibold px-4 py-1 shadow-xl bg-orange-400 rounded-lg m-auto hover:bg-lime-700'>clear</button>


                    
//                 </form>
//             </div>
//         </div>
//     </Fragment> 
//     )
// };

// export default addfilm;



// import {Fragment, useRef} from 'react'
// import {Toaster,Toast, toast} from "react-hot-toast";
// const postfilm =async ({name,category,director,Castmember,image,summary}:{name:string,summary:string,category:string,director:string,Castmember:string,image:string,}) =>{
//  const res = fetch("http://localhost:3000/api/filmadd",{
//     method:"POST",
//     body: JSON.stringify({name,category,director,Castmember,image,summary}),
//     //@ts-ignore
//     "Content-Type":"application/json",
// });
// return (await res).json();
// };


// const addfilm = () => {

//     const nameRef = useRef<HTMLInputElement | null>(null);
//     const categoryRef = useRef<HTMLSelectElement | null>(null);
//     const directorRef = useRef<HTMLInputElement | null>(null);
//     const CastmemberRef = useRef<HTMLInputElement | null>(null);
//     const imageRef = useRef<HTMLInputElement | null>(null);
//     const summaryRef = useRef<HTMLTextAreaElement | null>(null);

//     const handleSubmit = async (e:any) => {
//         e.preventDefault();
//     if (nameRef.current && categoryRef && directorRef && CastmemberRef && imageRef && summaryRef.current ){
//         toast.loading("sendi request",{id:"1"});
//         await postfilm({
//             name:nameRef.current?.value,
//             category:categoryRef.current?.value,
//             director:directorRef.current?.value,
//             Castmember:CastmemberRef.current?.value,
//             image:imageRef.current?.value,
//             summary:summaryRef.current?.value,
//         });
//         toast.success("Posted successfully",{id:"1"});
//     }
//     };
  

//     return(
//         <Fragment>
//         <Toaster/>
//         <div className="w-full m-auto flex my-4">
//             <div className="flex flex-col justify-center items-center m-auto">
//                 <p className="text-2xl text-fuchsia-600 font-bold p-3">Add New movies</p>
//                 <form onSubmit={handleSubmit}>
//                     <input 
//                     ref={nameRef} 
//                     placeholder='Enter film name' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
//                     </input>

//                     <select
//                     ref={categoryRef}
//                     className='rounded-md px-4 py-2 my-2 w-full'>
//                         <option>---Select Film Category---</option>
//                         <option>Action</option>
//                     </select>

//                     <input 
//                     ref={directorRef} 
//                     placeholder='Director name' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
//                     </input>

//                     <input 
//                     ref={CastmemberRef} 
//                     placeholder='Cast Member' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
//                     </input>

//                     <input 
//                     ref={imageRef} 
//                     placeholder='Image url' type="text" className='rounded-md px-4 py-2 my-2 w-full' >
//                     </input>

//                     <div className='image'>

//                     </div>

//                     <textarea 
//                     ref={summaryRef} placeholder='Enter Film summery' className='rounded-md px-4 py-4 w-full my-2'></textarea>

                    

//                     <button className='font-semibold px-4 py-1 shadow-xl bg-orange-400 rounded-lg m-auto hover:bg-lime-700'>Submit</button>
//                     <button type='reset' className='font-semibold px-4 py-1 shadow-xl bg-orange-400 rounded-lg m-auto hover:bg-lime-700'>clear</button>


                    
//                 </form>
//             </div>
//         </div>
//     </Fragment> 
//     )
// };

// export default addfilm;
import { Fragment, useRef, useState } from 'react';
import { Toaster, Toast, toast } from 'react-hot-toast';
import { Image, CloudinaryContext } from 'cloudinary-react';
import Dropzone from 'react-dropzone';

const postfilm = async ({
  name,
  summary,
  category,
  director,
  Castmember,
  image,
}: {
  name: string;
  summary: string;
  category: string;
  director: string;
  Castmember: string;
  image: string;
}) => {
  const res = await fetch('http://localhost:3000/api/filmadd', {
    method: 'POST',
    body: JSON.stringify({
      name,
      summary,
      category,
      director,
      Castmember,
      image,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

const AddFilm = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [cloudinaryImageUrl, setCloudinaryImageUrl] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLSelectElement | null>(null);
  const directorRef = useRef<HTMLInputElement | null>(null);
  const CastmemberRef = useRef<HTMLInputElement | null>(null);
  const summaryRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      nameRef.current &&
      categoryRef.current &&
      directorRef.current &&
      CastmemberRef.current &&
      summaryRef.current
    ) {
      toast.loading('Sending request', { id: '1' });
      await postfilm({
        name: nameRef.current.value,
        category: categoryRef.current.value,
        director: directorRef.current.value,
        Castmember: CastmemberRef.current.value,
        image: cloudinaryImageUrl || '',
        summary: summaryRef.current.value,
      });
      toast.success('Posted successfully', { id: '1' });
      // Reset form fields
    nameRef.current.value = '';
    categoryRef.current.value = '';
    directorRef.current.value = '';
    CastmemberRef.current.value = '';
    summaryRef.current.value = '';
    setUploadedImage(null);
    setCloudinaryImageUrl(null);
    setPreviewImage(null);
    }
  };

  const handleImageUpload = async (files: File[]) => {
    try {
      toast.loading('Uploading image...', { id: 'imageUpload' });

      const file = files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'eeoa5ofl');

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dv4igakoo/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      const imageUrl = data.secure_url;

      setUploadedImage(imageUrl);
      setCloudinaryImageUrl(imageUrl);
      setPreviewImage(URL.createObjectURL(file));

      toast.success('Image uploaded successfully', { id: 'imageUpload' });
    } catch (error) {
      toast.error('Failed to upload image', { id: 'imageUpload' });
    }
  };

  return (
    <Fragment>
      <Toaster />
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-fuchsia-600 font-bold p-3">Add New movies</p>
          <form onSubmit={handleSubmit}>
            <input
              ref={nameRef}
              placeholder="Enter film name"
              type="text"
              className="rounded-md px-4 py-2 my-2 w-full"
            />

            <select ref={categoryRef} className="rounded-md px-4 py-2 my-2 w-full">
              <option>---Select Film Category---</option>
              <option>Action</option>
            </select>

            <input
              ref={directorRef}
              placeholder="Director name"
              type="text"
              className="rounded-md px-4 py-2 my-2 w-full"
            />

            <input
              ref={CastmemberRef}
              placeholder="Cast Member"
              type="text"
              className="rounded-md px-4 py-2 my-2 w-full"
            />

            <div className="w-full my-4">
              <Dropzone onDrop={handleImageUpload}>
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps()}
                    className="rounded-md px-4 py-2 my-2 w-full border-dashed border-2 border-gray-300 flex justify-center items-center cursor-pointer"
                  >
                    <input {...getInputProps()} />
                    {previewImage ? (
                      <img src={previewImage} alt="Uploaded" style={{ width: '300px', height: '200px' }} />
                    ) : (
                      'Drop image here or click to browse'
                    )}
                  </div>
                )}
              </Dropzone>
              <textarea 
                    ref={summaryRef} placeholder='Enter Film summery' className='rounded-md px-4 py-4 w-full my-2'></textarea>
            </div>

            <button className="font-semibold px-4 py-1 shadow-xl bg-orange-400 rounded-lg m-auto hover:bg-lime-700">
              Submit
            </button>
            <button
              type="reset"
              className="font-semibold px-4 py-1 shadow-xl bg-orange-400 rounded-lg m-auto hover:bg-lime-700"
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const App = () => (
  <CloudinaryContext cloudName="dv4igakoo">
    <AddFilm />
  </CloudinaryContext>
);

export default App;
