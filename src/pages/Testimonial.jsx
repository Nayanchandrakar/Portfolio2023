import React from "react"
import { TestimonialDetails, fadeIn, MotionWrapper } from "../FIle/Exporter.js"
import HeadingShortner from "../components/HeadingShortner"
import { motion } from "framer-motion"

const TestimonialRender = ({ index, image, name, company, description }) => (
    <motion.div
        variants={fadeIn("down", "spring", index * 0.5, 0.75)}
        key={`motionkey-${index}`}
        className="flex flex-col rounded-lg justify-center p-8 items-center gap-4 w-full h-auto bg-white/[.1] backdrop-blur-3xl"
    >
        <div className="flex flex-row gap-4 w-full">
            <img
                src={image}
                className="w-[3rem] h-[3rem] object-cover rounded-full"
                alt=""
            />
            <div className="flex flex-col">
                <span className="text-gray-200">{name}</span>
                <span className=" text-sm text-gray-500">{company}</span>
            </div>
        </div>

        <div className="w-full ">
            <p className="text-lg text-gray-500 ">{description}</p>
        </div>
    </motion.div>
)

const Testimonial = () => {
    return (
        <div className="mt-[6rem] relative">
            <HeadingShortner
                MainHeadline="What People Say"
                headline="Testimonials."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-12 items-center mt-[4rem] ">
                <span className="bg-gradient-to-b from-transparent via-blue-800/[.2] to-transparent absolute w-full  lg:h-[28rem] h-[38rem]" />
                {TestimonialDetails?.map((e, index) => {
                    return (
                        <TestimonialRender
                            key={`testimonial${index * 4}`}
                            index={index}
                            {...e}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MotionWrapper(Testimonial, "")
