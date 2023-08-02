import React from "react";
import { SiReact, SiTailwindcss, SiFlask, SiMongodb, SiGithub, SiYoutube } from 'react-icons/si';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

export default function Projects() {
    return (

        <div>
            <Navbar />
            {/* Card Sections */}
            <div className="bg-white border rounded-md px-4 py-4 mx-[17%] flex">
                <div className="flex flex-col">
                    {/* Card Text */}
                    <div className="justify-center items-center text-[#42C2FF]">
                        <h1 className="text-4xl font-bold">FitFlow</h1>
                        <ul className="text-base font-poppins">
                            <li>
                                • Created and implemented a robust front-end questionnaire feature using React and Tailwind CSS, ensuring seamless user interaction and data handling
                            </li>
                            <li>
                                • Collaborated on UI/UX improvements, leveraging design principles to enhance the user experience and optimize visual aesthetics
                            </li>
                        </ul>
                    </div>
                    {/* Icons */}
                    <div className="flex items-center text-gray-700 mt-3">
                        <div className="flex pr-3 border-r">
                            <SiReact size={30} />
                            <SiTailwindcss size={30} className="ml-5" />
                            <SiFlask size={30} className="ml-5" />
                            <SiMongodb size={30} className="ml-4 " />
                        </div>
                        <Link to="https://github.com/Jeffuz/FitFlow">
                            <SiGithub size={30} className="ml-5" />
                        </Link>
                        <Link to="https://youtu.be/F_luAmp3MX4">
                            <SiYoutube size={30} className="ml-5" />
                        </Link>
                    </div>
                </div>
                {/* Image */}
                {/* <img src={"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/536/476/datas/original.PNG"} alt="FitFlow Home Page"/> */}
            </div>
        </div>
    )
}