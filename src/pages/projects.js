import React from "react";
import projectData from "../data/projData.json"
import ProjCard from "../components/projCard";

export default function Projects() {
    return (
        <div>

            <div>
                {projectData.map((proj) => (
                    <ProjCard key={proj.id} {...proj} />
                ))}
            </div>

        </div>
    )
}