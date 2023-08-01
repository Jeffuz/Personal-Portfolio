import React from 'react'

const About = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='text-[#42C2FF] font-bold'>Hello, I'm Jeff Zhang.</h1>
                <h3 className='text-[#42C2FF]'>Student</h3>
                <p className='text-[#42C2FF]'> I am a forth year student studying Computer Engineering at UC Santa Cruz.
                    I am seeking a full stack developer role with an opportunity to use my skills
                    in developing web applications and software solutions.
                </p>
                <button className='bg-[#85F4FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Contact Me</button>
            </div>
        </div>
    )
}

export default About