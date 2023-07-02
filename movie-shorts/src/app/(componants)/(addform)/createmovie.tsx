'use client'
import React from 'react'
import Input from "./update"
import Dropinput from "./dropdownn_field"
import Dropzone from "./uploadimage"
import Button from "./button"

export default function createmovie() {
  return (
    <div>
        <Dropinput/>
        <Input/>
        <Dropzone/>
        <Button/>
    </div>
  )
}
