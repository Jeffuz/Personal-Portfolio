import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div>
            <motion.p
                animate={{ opacity: [0, 1], y: [30, 0] }}
                exit={{ opacity: [1, 0] }}
                transition={{ duration: 1 }}
            >
                <div className='flex justify-center text-[#42C2FF] mt-10 font-bold text-3xl'>
                    <span className='mx-auto border-b-2 border-[#42C2FF] p-2'>My Personal Projects</span>
                </div>
            </motion.p>
        </div>
    )
}