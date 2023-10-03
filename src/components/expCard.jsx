import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGoogle, FaRobot, FaBook, FaRocket } from "react-icons/fa6"
import { GiGraspingSlug } from "react-icons/gi"
import { BiMath } from "react-icons/bi"
import experiences from "../data/expData.json"

const ExpCard = () => {
    const iconMap = {
        FaGoogle: <FaGoogle />,
        GiGraspingSlug: <GiGraspingSlug />,
        FaRobot: <FaRobot />,
        FaBook: <FaBook />,
        BiMath: <BiMath />,
        FaRocket: <FaRocket />
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
                        <div className='font-semibold italic'>{exp.role}</div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default ExpCard