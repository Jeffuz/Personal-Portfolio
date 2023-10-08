import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import Jeff_Web_Resume from "../resume/Web_Resume.png";
import Jeff_Engineer_Resume from "../resume/Engineer_Resume.png";

export default function Resume() {
    const [selectedResume, setSelectedResume] = useState(Jeff_Web_Resume);
    const [resumeType, setResumeType] = useState("Web Dev");

    const toggleResume = () => {
        setSelectedResume(
            selectedResume === Jeff_Web_Resume
                ? Jeff_Engineer_Resume
                : Jeff_Web_Resume
        );
        setResumeType(resumeType === "Web Dev" ? "Engineer" : "Web Dev");
    };

    const downloadResume = () => {
        const anchor = document.createElement("a");
        anchor.href = selectedResume;
        anchor.download = `Jeff_${resumeType}_Resume.png`;
        anchor.click();
    };

    return (
        <motion.div
            animate={{ opacity: [0, 1], y: [30, 0] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col">
                <div className="flex justify-center mt-2">
                    <button
                        className="bg-[#42C2FF] text-white py-2 px-4 rounded ml-2 mr-4 font-semibold"
                        onClick={toggleResume}
                    >
                        Toggle Resume ({resumeType})
                    </button>
                    <button
                        className="bg-[#42C2FF] text-white py-2 px-4 rounded"
                        onClick={downloadResume}
                    >
                        <AiOutlineDownload />
                    </button>
                </div>
                <div className="flex justify-center my-10">
                    <motion.img
                        key={selectedResume}
                        src={selectedResume}
                        className="xl:w-[65%] w-full px-10"
                        animate={{ opacity: [0, 1], y: [30, 0] }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
