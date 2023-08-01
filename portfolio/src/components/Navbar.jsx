import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#85F4FF]'>
            <h1 className='w-full text-3xl font-bold'>JEFF ZHANG.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>HOME</li>
                <li className='p-4'>EXPERIENCE</li>
                <li className='p-4'>PROJECTS</li>
                <li className='p-4'>RESUME</li>
                <li className='p-4'>CONTACT</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-100  bg-[#EFFFFD] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold m-4 pl-1'>JEFF ZHANG.</h1>
                <ul className='px-4'>
                    <li className='p-4 border-b '>HOME</li>
                    <li className='p-4 border-b '>EXPERIENCE</li>
                    <li className='p-4 border-b '>PROJECTS</li>
                    <li className='p-4 border-b '>RESUME</li>
                    <li className='p-4 border-b '>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar