import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
    let [open, setOpen] = useState(false);
    return (
        <nav className="bg-blue-100 drop-shadow-lg fixed w-full top-0">
            <div className="bg-blue-100 max-w-7xl mx-auto flex lg:flex-row flex-col lg:justify-between lg:items-center lg:px-10 lg:my-0 lg:py-4 py-2">
                <Link to="/" className="text-[#0f1e2c] font-semibold flex flex-row lg:mx-0 mx-auto">
                    <div className="md:text-[30px] text-[24px]">
                        <ScrollLink
                            to="home_header"
                            smooth={true}
                            duration={500}
                            offset={-120}
                            spy={true}
                            activeClass='active'
                        >
                            Jeff Zhang
                        </ScrollLink></div>
                </Link>
                <div onClick={() => setOpen(!open)} className='absolute top-4 left-4 cursor-pointer lg:hidden'>
                    <LuMenu className='text-[24px]' />
                </div>
                <div className={` text-[#0f1e2c] font-medium
        flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-7 lg:py-0 pt-10 pb-6 lg:pl-0 pl-8
        absolute lg:static bg-blue-100 lg:z-auto z-[-1] left-0 lg:w-auto w-full 
        transition-all duration-500 ${open ? 'top-6 opacity-100' : 'top-[-400px]'} lg:opacity-100`}>
                    <ScrollLink
                        onClick={() => setOpen(!open)}
                        to="home_header"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        spy={true}
                        activeClass='active'
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        onClick={() => setOpen(!open)}
                        to="about_header"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        spy={true}
                        activeClass='active'
                    >
                        About
                    </ScrollLink>
                    <ScrollLink
                        onClick={() => setOpen(!open)}
                        to="experience_header"
                        smooth={true}
                        duration={500}
                        offset={-120}
                        spy={true}
                        activeClass='active'
                    >
                        Experience
                    </ScrollLink>
                    <ScrollLink
                        onClick={() => setOpen(!open)}
                        to="project_header"
                        smooth={true}
                        duration={500}
                        offset={-200}
                        spy={true}
                        activeClass='active'
                    >
                        Project
                    </ScrollLink>
                    <a onClick={() => setOpen(!open)} href='resume.pdf' target="_blank">
                        Resume
                    </a>
                    <ScrollLink
                        onClick={() => setOpen(!open)}
                        to="contact_header"
                        smooth={true}
                        duration={500}
                        offset={-200}
                        spy={true}
                        activeClass='active'
                    >
                        Contact
                    </ScrollLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;