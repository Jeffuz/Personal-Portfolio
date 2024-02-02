import React from 'react'

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
                    <div className='mt-2 mb-4'>
                        {project.tools.map((tool, index) => (
                            <span key={index} className='skill_theme'>
                                {tool}
                            </span>
                        ))}
                    </div>
                    {/* Image */}
                    <img src={`/project_images/${project.image}`} className='rounded border-2 border-slate-200/10 w-[200px] h-[112.5px]' loading='lazy' />
                </div>
            ))}
        </div>
    )
}

export default Projects