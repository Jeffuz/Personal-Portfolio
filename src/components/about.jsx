import React from 'react';

const About = () => {
    return (
        <div>
            <div id='about_header' className='header md:hidden border-l-2 pl-2'>About</div>
            <div id='about_content' className='text-slate-400 leading-7 text-md font-medium flex flex-col gap-4'>
                <div>
                    ✨ I’ve always been a daydreamer, imagining how things could look, work, or feel. Turning those thoughts into something real—something people can use and connect with—brings me the most joy. For me, it’s about balancing creativity with logic to build things that feel right.                </div>
                <div>
                    🎓 I recently graduated from the University of California, Santa Cruz. During my time there, I worked on impactful software projects that supported
                    <span className='about_bold_importance'> <a href='https://police.ucsc.edu/' target='_blank'>law enforcement</a></span> and strengthened a
                    <span className='about_bold_importance'> <a href='https://www.sluggaming.club/' target='_blank'>student-led gaming community</a></span>.
                    Currently, I am focused on building an educational app for a tutoring center to create a fun and effective learning experience for kids and teens.
                </div>
                <div>
                    🏆 I’ve also had the privilege of contributing to award-winning hackathon projects such as
                    <span className='about_bold_importance'> <a href='https://devpost.com/software/helora' target='_blank'>Healora</a></span>, an AI-powered healthcare platform with emotionally intelligent voice AI, and
                    <span className='about_bold_importance'> <a href='https://github.com/Jeffuz/EcoScan' target='_blank'>EcoScan</a></span>, which assesses the environmental impact of products using AI-driven insights. Hackathons have been a great way for me to explore innovative ideas and connect with like-minded individuals.
                </div>
                <div>
                    🏔️ Outside of tech, you’ll find me bouldering, playing tennis, or searching for exciting food spots. I’m always looking for ways to combine creativity and logic in my work. Feel free to <span className='about_bold_importance'> <a href='https://www.linkedin.com/in/jeffzhang0049/' target='_blank'>connect</a></span> if you'd like to collaborate or discuss opportunities!
                </div>
            </div>
        </div>
    )
}

export default About