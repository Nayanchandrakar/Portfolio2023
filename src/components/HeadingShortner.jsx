import React from "react"
import { Slider } from "../FIle/Exporter.js"
import { motion } from "framer-motion"

const HeadingShortner = ({ MainHeadline, headline, paragraph }) => {
    return (
        <motion.div variants={Slider()}>
            <div className="flex flex-col gap-3">
                <span className="uppercase text-gray-400 font-bold text-base">
                    {MainHeadline}
                </span>
                <span className="text-white text-5xl font-bold">
                    {headline}
                </span>
                <p className="text-gray-400 text-lg  w-full lg:max-w-[60%] mt-8">
                    {paragraph}
                </p>
            </div>
        </motion.div>
    )
}

export default HeadingShortner
