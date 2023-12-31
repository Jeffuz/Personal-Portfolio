import React from "react";
import { useForm } from '@formspree/react';
import { motion } from "framer-motion";

export default function Contact() {
    const [state, handleSubmit] = useForm("mnqkjbbr");

    return (
        <div>
            <motion.p
                animate={{ opacity: [0, 1], y: [30, 0] }}
                exit={{ opacity: [1, 0] }}
                transition={{ duration: 1 }}
            >
                <div className="mt-[17.5%] md:mt-[7.5%] flex items-center justify-center ">
                    <div className="bg-[#262B30] p-6 max-w-md w-full">
                        <h2 className="text-[#42C2FF] text-3xl font-semibold mb-6">Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Name */}
                            <div className="mb-4">
                                <label className="block text-[#42C2FF] text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-[#42C2FF] text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            {/* Message */}
                            <div className="mb-4">
                                <label className="block text-[#42C2FF] text-sm font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline resize-none h-32"
                                    placeholder="Your Message"
                                    required
                                />
                            </div>
                            {/* Button */}
                            <div className="flex justify-center text-white">
                                <button
                                    type='submit'
                                    className='bg-[#42C2FF] text-white shadow-lg w-[200px] rounded-md font-bold my-6 px-6 py-3 mx-8 tracking-wide'
                                    disabled={state.submitting}
                                >
                                    {state.submitting ? 'Submitting...' : 'Submit'}
                                </button>

                            </div>
                        </form>
                    </div >
                </div>
            </motion.p>
        </div>
    )
}