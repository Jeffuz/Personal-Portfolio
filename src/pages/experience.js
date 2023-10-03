import React from 'react'
import experienceData from '../data/expData.json'
import ExpCard from '../components/expCard'

const experience = () => {
    return (
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
    )
}

export default experience