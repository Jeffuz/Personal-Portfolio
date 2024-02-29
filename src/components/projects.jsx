import React from 'react'
import { FaGithub } from "react-icons/fa";

// "projTitle": "",
// "link": "",
// "content": "",
// "tools": [""],
// "image": ""

let projectObj = [
    {
        "projTitle": "EcoScan",
        "link": "https://github.com/Jeffuz/EcoScan",
        "content": "EcoScan uses data scraped from Amazon to assess the environmental impact of products with the help of OpenAI, presenting key details like material composition and impacts from manufacturing and shipping.",
        "tools": ["React.js", "Tailwind CSS", "Flask", "Firebase"],
        "image": "ecoscan.png"
    },
    {
        "projTitle": "Restaurant-Ordering-System",
        "link": "https://github.com/Jeffuz/Restaurant-Ordering-System",
        "content": "The Restaurant Ordering System is a point-of-sales system that allows customers to effortlessly browse menus and place orders. Simultaneously, it empowers restaurants with efficient order management, delivering a seamless and enhanced dining experience.",
        "tools": ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "Figma"],
        "image": "ros.png"
    },
    {
        "projTitle": "EduTrade",
        "link": "https://github.com/Jeffuz/EduTrade",
        "content": "A platform for students to share or sell their used school supplies locally. Users can create listings, engage in private chats, participate in discussions, and search for items based on location.",
        "tools": ["React.js", "Tailwind CSS", "Firebase"],
        "image": "edutrade.png"
    },
    {
        "projTitle": "FitFlow",
        "link": "https://github.com/Jeffuz/FitFlow",
        "content": "A website that uses the OpenAI api to generate customized workouts, nutrtion and exercise recommendation. Users fill out a questionnaire that asks them various questions, about goals, lifestyle, and what they are aiming for.",
        "tools": ["React.js", "Tailwind CSS", "Flask", "MongoDB"],
        "image": "fitflow.png"
    }
]

const Projects = () => {
    return (
        <div>
            <div id='project_header' className='header border-l-2 pl-2'>Projects</div>
            {projectObj.map((project, index) => (
                <div key={index} className='mb-12'>
                    {/* Project Title  */}
                    <div className='flex items-baseline font-bold leading-tight text-base'>
                        <a href={`${project.link}`} className='text-slate-200 hover:text-blue-300 duration-300'>{project.projTitle}</a>
                    </div>
                    {/* Content */}
                    <div className='mt-2 text-sm leading-normal text-slate-400 font-medium'>{project.content}</div>
                    <div className='mb-4'>
                        {project.tools.map((tool, index) => (
                            <button key={index} className='skill_theme'>
                                {tool}
                            </button>
                        ))}
                    </div>
                    <div className='mb-4 flex items-center me_social_media_icons'><a href={`${project.link}`}><FaGithub size={25}/></a></div>
                    {/* Image */}
                    <img src={`/project_images/${project.image}`} className='rounded border-2 border-slate-200/10 w-[230px] h-[115px]' loading='lazy' />
                </div>
            ))}
        </div>
    )
}

export default Projects