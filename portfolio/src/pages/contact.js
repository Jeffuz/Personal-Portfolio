import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <section className="py-16 lg:section">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        {/* text */}
                        <div className="flex-1 flex justify-start items-center">
                            <div>
                                <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
                                <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">Let's work <br /> together!
                                </h2>
                            </div>
                        </div>
                        {/* form */}
                        <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 itmes-start">
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-[#42C2FF] focus:border-accent transition-all"
                                type='text'
                                placeholder="Your name"
                            >
                            </input>
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-[#42C2FF] focus:border-accent transition-all"
                                type='text'
                                placeholder="Your email"
                            >
                            </input>
                            <textarea
                                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-[#42C2FF] focus:border-accent transition-all resize-none mb-12"
                                placeholder="Your message"
                            >
                            </textarea>
                            <button className='bg-[#85F4FF] hover:bg-[#42C2FF] hover:text-[#EFFFFD] text-white duration-300 ease-in-out shadow-lg w-[200px] rounded-md font-medium px-6 py-3'>Send message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}