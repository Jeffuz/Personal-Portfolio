import React from 'react'

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
      "startTime": "JAN 2024",
      "endTime": "Present",
      "jobRole": "Software Developer",
      "companyName": "UCSC Police Department",
      "link": "https://police.ucsc.edu/",
      "content": "",
      "tools": [""]
    },
    {
      "startTime": "SEP 2023",
      "endTime": "Present",
      "jobRole": "Reader",
      "companyName": "Baskin Engineering at UCSC",
      "link": "https://organization.soe.ucsc.edu/reader-and-tutor-hiring",
      "content": "",
      "tools": ["Python", "Bash"]
    },
    {
      "startTime": "JUN 2023",
      "endTime": "Present",
      "jobRole": "Web Developer",
      "companyName": "Slug Gaming",
      "link": "https://www.sluggaming.club/",
      "content": "",
      "tools": ["React.js", "Tailwind CSS", "Firebase", "Figma"]
    },
    {
      "startTime": "JUL 2022",
      "endTime": "AUG 2022",
      "jobRole": "CSI Tech Intern",
      "companyName": "Google",
      "link": "https://about.google/",
      "content": "",
      "tools": ["HTML", "CSS", "JavaScript"]
    }
  ]

  return (
    <div>
      <div id='experience_header' className='header'>Experience</div>
      {experienceObj.map((experience, index) => (
        <div key={index} className='flex flex-col mb-12'>
          {/* Time */}
          <div id='experience_time' className='mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500'>{experience.startTime} — {experience.endTime}</div>
          {/* Role and Company */}
          <div className='flex items-baseline font-bold leading-tight text-base'>
            <a href={`${experience.link}`} className='text-slate-200 hover:text-blue-300 duration-300'>
              <span>{experience.jobRole}</span>
              <span>&nbsp;·&nbsp;</span>
              <span>{experience.companyName}</span>
            </a>
          </div>
          {/* Content */}
          <div id='experience_content' className='mt-2 text-sm leading-normal text-slate-400 font-medium'>{experience.content}</div>
          {/* Tools */}
          <div id='experience_tools' className='mt-2'>
            {experience.tools.map((tool, index) => (
              <span key={index} className='skill_theme'>
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className='font-semibold text-slate-200 hover:text-blue-300 duration-300'>
        <a href='resume.pdf' target='_blank'>View Full Résumé</a>
      </div>
    </div>
  )
}

export default Experience
