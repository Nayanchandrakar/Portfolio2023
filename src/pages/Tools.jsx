import { motion } from "framer-motion"
import React from "react"
import HeadingShortner from "../components/HeadingShortner.jsx"
import { ToolsDetails, fadeIn, MotionWrapper } from "../FIle/Exporter.js"

const ToolsLoop = ({ toolName, image, index }) => (
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
        <div className="flex flex-col bg-gradient_border rounded-full w-[6rem] h-[6rem] justify-center items-center shadow-[2px_2px_34px_2px_rgba(46,241,255,0.2)]">
            <div className="bg-glass_effect2 w-[5.6rem] h-[5.6rem] rounded-full flex justify-center items-center flex-col">
                <img src={image} className="w-10" alt="Image Not Found" />
                <span className="text-sm text-white">{toolName}</span>
            </div>
        </div>
    </motion.div>
)

const Tools = () => {
    return (
        <>
            <div className="mt-[6rem]">
                <HeadingShortner
                    MainHeadline="Developer tools"
                    headline="Technologies."
                />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-8 w-full justify-center">
                {ToolsDetails?.map((e, index) => (
                    <ToolsLoop
                        key={`toolsLoop-${index}`}
                        index={index}
                        {...e}
                    />
                ))}
            </div>
        </>
    )
}

export default MotionWrapper(Tools, "")
