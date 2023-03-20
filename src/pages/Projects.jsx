import React from "react"
import HeadingShortner from "../components/HeadingShortner"
import { MotionWrapper } from "../Hoc/index.js"
import { projectdetails, github, fadeIn } from "../FIle/Exporter.js"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
const color = ["text-red-600", "text-blue-600", "text-green-600"]

const ProjectRender = ({
    index,
    site_url,
    image,
    title,
    paragraph,
    technologies,
}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            key={`motionkey-${index * 31}`}
            className="flex flex-col rounded-2xl justify-center p-5 items-center gap-4 w-full h-full bg-glass_effect2"
        >
            <a href={site_url}>
                <div className="relative w-full">
                    <img
                        src={image}
                        className="w-full object-cover rounded-lg"
                        alt="Image not available"
                    />
                    <span className="absolute w-10 bg-glass_effect rounded-full flex justify-center items-center h-10 top-2 right-2 ">
                        <img src={github} className="w-8 h-8" alt="" />
                    </span>
                </div>

                <div className="flex flex-col gap-6">
                    <span className="text-lg text-white mt-6">{title}</span>
                    <p className="text-lg text-gray-400 w-full">{paragraph}</p>
                    <div className="flex flex-row gap-6">
                        {technologies?.map((e, index) => (
                            <span
                                key={`nerendkk${index * 6}}`}
                                className={`${color[index]}`}
                            >
                                {e}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <div className="mt-[6rem]">
            <HeadingShortner
                MainHeadline="My Work"
                headline="Projects."
                paragraph="Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-12 items-center mt-[4rem]">
                {projectdetails?.map((e, index) => {
                    return (
                        <Tilt>
                            <ProjectRender
                                key={`project-render${index * 8}`}
                                index={index}
                                {...e}
                            />
                        </Tilt>
                    )
                })}
            </div>
        </div>
    )
}

export default MotionWrapper(Projects, "project")
