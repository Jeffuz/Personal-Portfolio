import React from "react"
import { Link } from 'react-router-dom'

export default function NoPage() {
    return (
        <>
            <div className="flex items-center justify-center h-[80vh] from-[#262B30]">
                <div className="text-[white] text-center">
                    <h1 className="text-6xl font-bold mb-6">404</h1>
                    <p className="text-2xl mb-6">Oops! Page not found</p>
                    <p className="text-lg mb-12">The page you're looking for might have been moved or doesn't exist.</p>
                    <Link to="/" className="bg-[#42C2FF] font-bold text-white px-6 py-3 rounded-md shadow-lg ">
                        Go to Home
                    </Link>
                </div>
            </div>
        </>
    )
}