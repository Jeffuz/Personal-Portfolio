import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='bg-[#EFFFFD]'>
            <div className='flex justify-between items-center h-24 max-w-[1500px] mx-auto px-4 text-[#85F4FF]'>
                <h1 className='w-full text-3xl font-bold ml-5'>
                    <Link to="/">
                        JEFF ZHANG.
                    </Link>
                </h1>
                <ul className='hidden md:flex font-bold'>
                    <li className='p-4'>
                        <Link to="/">
                            HOME
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/experience">
                            EXPERIENCE
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/resume">
                            RESUME
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={nav
                    ? 'md:hidden fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-100  bg-[#EFFFFD] ease-in-out duration-500'
                    : 'fixed left-[-100%] top-0 w-[50%] h-full border-r border-r-gray-100  bg-[#EFFFFD] ease-in-out duration-500'
                }
                    style={{ zIndex: 2 }}
                >
                    <h1 className='w-full text-3xl font-bold m-4 pl-1'>JEFF ZHANG.</h1>
                    <ul className='px-4 font-bold'>
                        <li className='p-4 border-b '>
                            <Link to="/home">
                                HOME
                            </Link>
                        </li>
                        <li className='p-4 border-b '>
                            <Link to="/experience">
                                EXPERIENCE
                            </Link>
                        </li>
                        <li className='p-4 border-b '>
                            <Link to="/projects">
                                PROJECTS
                            </Link>
                        </li>
                        <li className='p-4 border-b '>
                            <Link to="/resume">
                                RESUME
                            </Link>
                        </li>
                        <li className='p-4 border-b '>
                            <Link to="/contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar