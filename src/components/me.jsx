import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SiDevpost } from "react-icons/si";


const Me = () => {
  return (
    <div className='flex flex-col gap-3 w-[60%]'>
        {/* Name */}
        <div id='user_name' className='text-4xl font-bold text-slate-200'>Jeff Zhang</div>
        {/* Current Position */}
        <div id='user_current_position' className='text-xl font-medium text-slate-200'>Software Developer at UCSC Police Department</div>
        {/*  Slogan */}
        <div id='user_slogan' className='text-slate-400 text-md font-medium'>My passion lies in crafting web apps and software solutions from scratch.</div>
        {/* Social Media Icons */}
        <div id='user_socials' className='flex gap-5'>
            <IoMail size={30} className='me_social_media_icons'/>
            <FaGithub size={30} className='me_social_media_icons'/>
            <FaLinkedin size={30} className='me_social_media_icons'/>
            <SiDevpost size={30} className='me_social_media_icons'/>
        </div>
    </div>
  )
}

export default Me