import React from 'react'

const About = () => {
    return (
        <div>
            <div id='about_header' className='header md:hidden border-l-2 pl-2'>About</div>
            <div id='about_content' className='text-slate-400 leading-7 text-md font-medium flex flex-col gap-4'>
                <div>
                    As I entered college, I lacked a clear vision of my future path. It wasn't until an apprenticeship opportunity at
                    <span className='about_bold_importance'> <a href='https://about.google/' target='_blank'>Google</a> </span> was recommended to me
                    that I discovered my passion for web development. Fast-forward to today, I've had the privilege of contributing to software projects for
                    <span className='about_bold_importance'> <a href='https://police.ucsc.edu/' target='_blank'>law enforcement</a> </span> and a
                    <span className='about_bold_importance'> <a href='https://www.sluggaming.club/' target='_blank'>student-led gaming club</a></span>.
                </div>
                <div>
                    Recently, I was involved in leading a project and developing an application for the
                    <span className='about_bold_importance'> <a href='https://police.ucsc.edu/' target='_blank'>UCSC Police Department</a></span>.
                    I take pleasure in creating products that not only meet but surpass the expectations of customers and users.
                    Additionally, I have also developed award-winning hackathon projects such as
                    <span className='about_bold_importance'> <a href='https://devpost.com/software/helora' target='_blank'>Healora</a></span>
                    , an AI-powered healthcare platform with emotionally intelligent voice AI, and
                    <span className='about_bold_importance'> <a href='https://github.com/Jeffuz/EcoScan' target='_blank'>EcoScan</a></span>
                    , which assesses the environmental impact of products with AI-driven insights.
                    I enjoy participating in
                    <span className='about_bold_importance'> <a href='https://devpost.com/hackathons' target='_blank'>hackathons</a> </span> to explore new ideas and connect with like-minded individuals.
                </div>
                <div>
                    Away from the computer, you'll find me bouldering, playing tennis, or exploring the town in search of new and exciting food experiences.
                </div>
            </div>
        </div>
    )
}

export default About