'use client'
import React from 'react'
import AdminNav from "../(componants)/adminnav"
import Createmovie from "../(componants)/(addform)/createmovie"
import Addform from "../(addmovieform)/moviadd"
import Addfilm from "../(addmovieform)/addfilm"

export default function page() {
  return (
  <>
    <div className=""><AdminNav /></div>
    {/* <div><Createmovie/> </div> */}
    {/* <div><Addform/></div> */}
    <div className=""><Addfilm /></div>
  </>
  )
}
