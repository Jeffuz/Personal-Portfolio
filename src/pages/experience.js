import React from 'react'
import experienceData from '../data/expData.json'
import ExpCard from '../components/expCard'

const experience = () => {
    return (
        <div>
            {experienceData.map((expDetail) => (
                <ExpCard key={expDetail.id} {...expDetail} />
            ))}
        </div>
    )
}

export default experience