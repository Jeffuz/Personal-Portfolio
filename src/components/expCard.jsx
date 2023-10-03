import React from 'react'

const ExpCard = ({ name, location, time, role, duties }) => {
    return (
        <div>
            <div>{name}</div>
            <div>{location}</div>
            <div>{time}</div>
            <div>{role}</div>
            <ul className="list-disc pl-6 mt-2">
                {Object.values(duties).map((duty, index) => (
                    <li key={index} className="">{duty}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExpCard