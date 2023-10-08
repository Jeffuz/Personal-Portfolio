import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { CgWebsite } from 'react-icons/cg'

const ProjCard = ({ name, content, tags, image, github, web }) => {
    return (
        <motion.p
            animate={{ opacity: [0, 1], y: [30, 0] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 1 }}
        >
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 px-20 py-12'>
                <div className='flex flex-col justify-center'>
                    <div className='text-[#42C2FF] font-bold text-5xl'>{name}</div>
                    <div className='pt-5'>
                        <div className='text-[#42C2FF] text-lg font-semibold'>{content}</div>
                        <div className='flex gap-5 pt-3'>
                            {Object.values(tags).map((tag) => (
                                <div className='text-[#85F4FF] font-semibold italic'>{tag}</div>
                            ))}
                        </div>
                        <div className='pt-3 flex gap-5'>
                            <Link to={github}>
                                <FaGithub size={35} className='text-gray-400 icon-link' />
                            </Link>
                            {web && (
                                <Link to={web}>
                                    <CgWebsite size={35} className='text-gray-400 icon-link' />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <img src={require(`../images/${image}`)} alt={name} />
                </div>
            </div>
        </motion.p>
    )
}

export default ProjCard
