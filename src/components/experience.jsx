import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {

  let experienceObj = [
    // "startTime": "",
    // "endTime": "",
    // "jobRole": "",
    // "companyName": "",
    // "link": "",
    // "content": "",
    // "tools": [""]
    {
      "startTime": "JUL 2024",
      "endTime": "PRESENT",
      "jobRole": "Software Engineering Fellow",
      "companyName": "Headstarter AI",
      "link": "https://headstarter.co/",
      "content": "Incoming Software Engineer Fellow",
      "tools": ["HTML", "CSS", "React.js", "Next.js", "Firebase", "AWS"]
    },
    {
      "startTime": "JAN 2024",
      "endTime": "JUN 2024",
      "jobRole": "Software Engineer",
      "companyName": "UCSC Police Department",
      "link": "https://police.ucsc.edu/",
      "content": "Streamlined inventory management by developing an RFID system that provided comprehensive inventory views, automated history tracking, and a dynamic dashboard for location-based scanning and auditing. This system significantly enhanced operational efficiency and accuracy by automating key processes and enabling real-time insights. Additionally, ensured robust system reliability and consistent usability across the platform.",
      "tools": ["React.js", "Material-UI", "Node.js", "Express.js", "PostgreSQL", "Docker", "OpenAPI", "Swagger API", "Vitest", "React Testing Library", "Mock Service Worker","Jest", "Supertest", "Figma"]
    },
    {
      "startTime": "SEP 2023",
      "endTime": "JUN 2024",
      "jobRole": "Reader",
      "companyName": "Baskin Engineering at UCSC",
      "link": "https://organization.soe.ucsc.edu/reader-and-tutor-hiring",
      "content": " Evaluated and provided constructive feedback on homework, papers, laboratory reports, and exams, ensuring alignment with course objectives using scripts. Engaged in regular meetings with the instructor to discuss grading criteria, address questions, and ensure consistency in evaluation standards",
      "tools": ["Python", "Bash"]
    },
    {
      "startTime": "JUN 2023",
      "endTime": "JUN 2024",
      "jobRole": "Web Developer",
      "companyName": "Slug Gaming",
      "link": "https://www.sluggaming.club/",
      "content": "Developed a dynamic website for a school gaming club, optimizing processes and minimizing operational overhead. Achieved a remarkable 1000% increase in site visitors post-successful deployment. Prioritized user experience with an intuitive interface.",
      "tools": ["React.js", "Tailwind CSS", "Firebase", "Figma"]
    },
    {
      "startTime": "JUL 2022",
      "endTime": "AUG 2022",
      "jobRole": "CSI Tech Intern",
      "companyName": "Google",
      "link": "https://about.google/",
      "content": "Created a website to raise awareness about littering at Google, engaged in cross-functional meetings for tech insights, and actively participated in career development workshops.",
      "tools": ["HTML", "CSS"]
    }
  ]

  return (
    <div>
      <div id='experience_header' className='header border-l-2 pl-2'>Experience</div>
      {experienceObj.map((experience, index) => (
        <div key={index} className='flex flex-col mb-12'>
          {/* Time */}
          <div id='experience_time' className='mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500'>{experience.startTime} — {experience.endTime}</div>
          {/* Role and Company */}
          <div className='flex items-baseline font-bold leading-tight text-base'>
            <a href={`${experience.link}`} target='_blank' className='text-slate-200 hover:text-blue-300 duration-300'>
              <span>{experience.jobRole}</span>
              <span>&nbsp;·&nbsp;</span>
              <span>{experience.companyName}</span>
            </a>
          </div>
          {/* Content */}
          <div id='experience_content' className='mt-2 text-sm leading-normal text-slate-400 font-medium'>{experience.content}</div>
          {/* Tools */}
          <div id='experience_tools'>
            {experience.tools.map((tool, index) => (
              <button disabled key={index} className='skill_theme'>
                {tool}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className='font-semibold text-slate-200 hover:text-blue-300 duration-300'>
        {/* <a href='resume.pdf' target='_blank' className='flex gap-3 items-center'> */}
        <a href='https://docs.google.com/document/d/1FKPtMoHCKeZ3yp7qb6fcvejohE0XpaNo/edit?usp=sharing&ouid=111757976668818703393&rtpof=true&sd=true' target='_blank' className='flex gap-3 items-center'>
          <div>View Full Résumé</div>
          <FaExternalLinkAlt size={16} />
        </a>
      </div>
    </div>
  )
}

export default Experience
