import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SiDevpost } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";

const Me = () => {
  return (
    <div id='home_header' className='flex flex-col gap-3'>
      {/* Name */}
      <div id='user_name' className='text-4xl font-bold text-slate-200 w-max'>Jeff Zhang</div>
      {/* Current Position */}
      <div id='user_current_position' className='text-lg font-semibold text-slate-200'>
        Software Developer at UCSC Police Department
      </div>
      {/*  Slogan */}
      <div id='user_slogan' className='text-slate-400 text-md font-medium'>My passion lies in crafting web apps and software solutions from scratch.</div>
      {/* Social Media Icons */}
      <div id='user_socials' className='flex gap-5'>
        <a href='mailto:jeffzhang0049@gmail.com'>
          <IoMail size={30} className='me_social_media_icons' />
        </a>
        <a href='https://github.com/Jeffuz'>
          <FaGithub size={30} className='me_social_media_icons' />
        </a>
        <a href='https://www.linkedin.com/in/jeffzhang0049/'>
          <FaLinkedin size={30} className='me_social_media_icons' />
        </a>
        <a href='https://devpost.com/jeffzhang0049'>
          <SiDevpost size={30} className='me_social_media_icons' />
        </a>
      </div>
      <div id='about_header' className='text-slate-200 font-semibold text-sm uppercase mt-9'>Education</div>
      <div id='user_education' className='flex'>
        <FaGraduationCap size={40} className='mr-5 text-blue-300' />
        <div className='flex flex-col '>
          <span className='text-slate-200 text-md font-medium'>B.S. in Computer Engineering</span>
          <span className='text-slate-400 text-sm font-medium'>2020 - Present</span>
          <span className='text-slate-400 text-sm font-medium'>UC Santa Cruz</span>
        </div>
      </div>
    </div>
  )
}

export default Me
