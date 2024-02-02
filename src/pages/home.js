import React from 'react'
import Me from '../components/me'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'

const Home = () => {
    return (
        <div className='flex-col md:flex-row flex md:h-screen md:px-20 lg:px-36'>
            <div className='app_module_format mt-24 md:mt-12 lg:pl-24 xl:pl-32'><Me /></div>
            <div className='md:overflow-auto lg:pl-12 xl:w-[700px]'>
                <div className='app_module_format md:mt-14'><About /></div>
                <div className='app_module_format'><Experience /></div>
                <div className='app_module_format'><Projects /></div>
                <div className='app_module_format'><Contact /></div>
            </div>
        </div>
    )
}

export default Home