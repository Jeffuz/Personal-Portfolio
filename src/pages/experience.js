import React from 'react'
import ExpCard from '../components/expCard'
import { motion } from 'framer-motion'

const experience = () => {
    return (
        <motion.p
            animate={{ opacity: [0, 1], y: [30, 0] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 1 }}
        >
            <ExpCard />
        </motion.p>
    )
}

export default experience