import React from 'react'
import experienceData from '../data/expData.json'
import ExpCard from '../components/expCard'
import { motion } from 'framer-motion'

const experience = () => {
    return (
        <motion.p
            animate={{ opacity: [0, 1], y: [30, 0] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 1 }}
        >
            <div>
                <div className='flex justify-center text-[#42C2FF] mt-10 font-bold text-3xl'>
                    <span className='mx-auto border-b-2 border-[#42C2FF] p-2'>My Experience</span>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 m-10'>
                    {experienceData.map((expDetail) => (
                        <ExpCard key={expDetail.id} {...expDetail} />
                    ))}
                </div>
            </div>
        </motion.p>
    )
}

export default experience