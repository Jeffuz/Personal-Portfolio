import React from 'react'
import Me from '../components/me'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'
import { useRef, useEffect } from 'react'


/* Citations: 
    For gradient follow cursor: https://www.youtube.com/watch?v=u1s3uHQibAs&t=663s
*/


const Home = () => {

    const heroRef = useRef(null);

    useEffect(() => {
        const updateMousePosition = (ev) => {
            if (!heroRef.current) return;
            const { clientX, clientY } = ev;
            heroRef.current.style.setProperty("--x", `${clientX}px`);
            heroRef.current.style.setProperty("--y", `${clientY}px`);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <>
            <style jsx>
                {`
                .hero {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100%;
                    background-image: radial-gradient(
                        circle farthest-side at var(--x, 50px) var(--y, 50px),
                        #0e3e82 0%,
                        transparent 70%
                    );
                }

                @media (max-width: 768px) {
                    .hero {
                        background-image: none;
                    }
                }
            `}
            </style>
            <div ref={heroRef} className="hero z-1">
                <div className='flex-col md:flex-row flex md:h-screen md:px-20 lg:px-36'>
                    <div className='app_module_format mt-24 md:mt-12 lg:pl-24 xl:pl-32'><Me /></div>
                    <div className='md:overflow-auto lg:pl-12 xl:w-[700px]'>
                        <div className='app_module_format md:mt-14'><About /></div>
                        <div className='app_module_format'><Experience /></div>
                        <div className='app_module_format'><Projects /></div>
                        <div className='app_module_format'><Contact /></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home