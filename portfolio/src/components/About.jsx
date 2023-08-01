import React from 'react'

const About = () => {
    return (
        <div className='text-white'>
            {/* Background Image */}
            <div className='absolute bottom-0 w-full'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                    <path
                        fill='#B8FFF9'
                        fill-opacity='1'
                        d='M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,144C672,171,768,213,864,229.3C960,245,1056,235,1152,202.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                    ></path>
                </svg>
            </div>
            {/* Description */}
            <div className='max-w-[800px] mt-[-96px] w-full h-screen text-left flex flex-col mx-auto justify-center'>
                <h1 className='text-[#42C2FF] font-poppins text-6xl font-bold leading-16 mx-8'>Hello, I'm Jeff Zhang.</h1>
                <h3 className='text-[#42C2FF] font-poppins text-2xl font-light leading-[266.667%] mx-8'>Student</h3>
                <p className='text-[#42C2FF] font-poppins text-xl font-medium leading-[210%] mx-8'> I am a fourth year student studying Computer Engineering
                    at <span className='text-[#85F4FF]'>UC Santa Cruz</span>.
                    My passion lies in crafting web apps and software solutions from scratch. Currently seeking a Web Developer role to put my skills into action and make an impact. Let's build something amazing together!
                </p>
                <button className='bg-[#85F4FF] w-[200px] rounded-md font-medium my-6 px-6 py-3 mx-8' onClick={() => window.location.href = 'mailto:jeffzhang0049@gmail.com'} style={{ zIndex: 1 }}>Contact Me</button>
            </div>
        </div>
    )
}

export default About