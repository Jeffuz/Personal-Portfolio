import React from 'react'

const ExpCard = ({ name, location, time, role, duties }) => {
    return (
        <div className='bg-white rounded-lg p-5 text-lg'>

            <div className='flex justify-between'>
                <div className=''>
                    <span className='uppercase font-bold'>{name}</span>, {location}
                </div>
                <div className=''>{time}</div>
            </div>
            <div className='italic font-bold'>{role}</div>
            <ul className="list-disc pl-6 mt-2 text-base">
                {Object.values(duties).map((duty, index) => (
                    <li key={index} className="">{duty}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExpCard