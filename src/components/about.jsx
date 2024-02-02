import React from 'react'

const About = () => {
    return (
        <div>
            <div id='about_header' className='header'>About</div>
            <div id='about_content' className='text-slate-400 leading-7 text-md font-medium flex flex-col gap-4'>
                <div>
                    As I entered college, I lacked a clear vision of my future path. It wasn't until an apprenticeship opportunity at
                    <span className='about_bold_importance'> <a href='https://about.google/'>Google</a> </span> was recommneded to me
                    that I discovered my passion for web development. Fast-forward to today, I've had the privilege of contributing to software projects for
                    <span className='about_bold_importance'> <a href='https://police.ucsc.edu/'>law enforcement</a> </span> and a
                    <span className='about_bold_importance'> <a href='https://www.sluggaming.club/'>student-led gaming club</a></span>.
                </div>
                <div>
                    Currently, my primary focus involves leading a project and developing an application for the
                    <span className='about_bold_importance'> <a href='https://police.ucsc.edu/'>UCSC Police Department</a></span>.
                    I take pleasure in creating products that not only meet but surpass the expectations of customers and users.

                    Outside of work, I participate in
                    <span className='about_bold_importance'> <a href='https://devpost.com/hackathons'>hackathons</a> </span> to explore new ideas and connect with like-minded individuals.
                </div>
                <div>
                    Away from the computer, you'll find me playing tennis, enjoying board games, or exploring the town in search of new and exciting food experiences.
                </div>
            </div>
        </div>
    )
}

export default About