import React from 'react'
import experienceData from '../data/expData.json'
import ExpCard from '../components/expCard'

const experience = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 m-10'>
            {experienceData.map((expDetail) => (
                <ExpCard key={expDetail.id} {...expDetail} />
            ))}
        </div>
    )
}

export default experience