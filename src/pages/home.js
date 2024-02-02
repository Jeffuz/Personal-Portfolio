import React from 'react'
import Me from '../components/me'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'

const Home = () => {
    return (
        <>
            <div className='app_module_format mt-24'><Me /></div>
            <div className='app_module_format'><About /></div>
            <div className='app_module_format'><Experience /></div>
            <div className='app_module_format'><Projects /></div>
            <div className='app_module_format'><Contact/></div>
        </>
    )
}

export default Home