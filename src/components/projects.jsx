import React from 'react'
import { FaGithub } from "react-icons/fa";

// "projTitle": "",
// "link": "",
// "content": "",
// "tools": [""],
// "image": ""

let projectObj = [
    {
        "projTitle": "AI-Customer-Support",
        "link": "https://github.com/Jeffuz/AI-Customer-Support",
        "content": "AI Customer Support is an AI-powered chatbot application designed to handle various customer support scenarios. It leverages advanced language models to provide intelligent and context-aware responses. The app includes features such as task-specific modes and the ability to enhance responses with external content using Retrieval-Augmented Generation (RAG).",
        "tools": ["Next.js", "React.js", "Tailwind CSS", "OpenAI", "LangChain", "Pinecone"],
        "image": "ai-cutomer-support.png"
    },
    {
        "projTitle": "myCraving",
        "link": "https://github.com/Jeffuz/myCraving",
        "content": "myCraving is a pantry management application designed to help users keep track of their ingredients, generate AI-driven recipes, and gain insights through data analytics. This app aims to make cooking and meal planning more efficient and enjoyable.",
        "tools": ["Next.js", "React.js", "Material-UI", "Firebase", "OpenAI"],
        "image": "myCraving.png"
    },
    {
        "projTitle": "Eyes2Ears",
        "link": "https://github.com/Jeffuz/Eyes2Ears",
        "content": "Eyes2Ears is a mobile application designed to assist visually impaired individuals by utilizing advanced AI technologies. The app allows users to capture images using their smartphone camera, which are then processed in real-time to provide audio descriptions of their surroundings.",
        "tools": ["React Native", "Expo", "OpenAI", "Firebase"],
        "image": "Eyes2Ears.png"
    },
    {
        "projTitle": "Diligent",
        "link": "https://github.com/Jeffuz/slack-clone",
        "content": "Diligent is a Slack style messaging system that allows users to collaborate. Users can login securely via JWT authentication,join workspaces and converse within the channels, as well as customize settings to suit their individual preferences.",
        "tools": ["React.js", "Material-UI", "Node.js", "Express.js", "PostgreSQL", "Docker", "OpenAPI", "Swagger API", "Vitest", "React Testing Library", "Mock Service Worker","Jest", "Supertest"],
        "image": "diligent.png"
    },
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
                        <a href={`${project.link}`} target='_blank' className='text-slate-200 hover:text-blue-300 duration-300'>{project.projTitle}</a>
                    </div>
                    {/* Content */}
                    <div className='mt-2 text-sm leading-normal text-slate-400 font-medium'>{project.content}</div>
                    <div className='mb-4'>
                        {project.tools.map((tool, index) => (
                            <button disabled key={index} className='skill_theme'>
                                {tool}
                            </button>
                        ))}
                    </div>
                    {/* <div className='mb-4 flex items-center me_social_media_icons'><a href={`${project.link}`}><FaGithub size={25}/></a></div> */}
                    {/* Image */}
                    <img src={`/project_images/${project.image}`} className='rounded border-2 border-slate-200/10 w-[230px] h-[115px]' loading='lazy' />
                </div>
            ))}
        </div>
    )
}

export default Projects