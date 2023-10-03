import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGoogle } from "react-icons/fa6"
import { GiGraspingSlug } from "react-icons/gi"
import experiences from "../data/expData.json"

const ExpCard = () => {
    const iconMap = {
        FaGoogle: <FaGoogle />,
        GiGraspingSlug: <GiGraspingSlug />,
    };

    return (
        <div>
            <VerticalTimeline>
                {experiences.map((exp) => (
                    <VerticalTimelineElement
                        key={exp.id}
                        date={<div className="min-[1170px]:text-white text-black text-lg">{exp.time}</div>}
                        iconStyle={{ background: '#262B30', color: '#fff' }}
                        icon={iconMap[exp.icon]}
                    >
                        <div className='flex justify-between'>
                            <div className="font-bold" >{exp.name}</div>
                            <div className="vertical-timeline-element-subtitle">{exp.location}</div>
                        </div>
                        <div className='font-bold'>{exp.role}</div>
                        <ul className='list-disc pl-5'>
                            {Object.values(exp.duties).map((duty, i) => (
                                <li key={i}>{duty}</li>
                            ))}
                        </ul>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default ExpCard