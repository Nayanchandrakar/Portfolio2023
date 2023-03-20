import React from "react"
import HeadingShortner from "../components/HeadingShortner"
import Tilt from "react-parallax-tilt"
import { fadeIn, Overviewdata, MotionWrapper } from "../FIle/Exporter.js"
import { motion } from "framer-motion"

const TiltComponent = ({ index, image, title }) => {
    return (
        <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
            <Tilt
                key={`mainkey234${index}`}
                perspective={500}
                className="flex justify-center items-center  flex-col overflow-hidden parallax-effect  "
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="inner-element h-[18rem] w-full rounded-xl bg-glass_effect flex flex-col items-center justify-center"
                >
                    <img
                        src={image}
                        className="w-[5rem] bg-transparent"
                        alt=""
                    />
                    <h1 className="text-base bg-transparent">{title}</h1>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Overview = () => {
    return (
        <div className="mt-[6rem]">
            <HeadingShortner
                MainHeadline="Introduction"
                headline={"Overview."}
                paragraph={
                    "A skilled React JavaScript Node.js MongoDB developer is an asset to any web development team, as they have a deep understanding of front-end and back-end development, allowing them to seamlessly integrate the two for a polished and seamless user experience.If youre looking for a developer who can bring your vision to life, a React JavaScript Node.js MongoDB developer is the perfect choice."
                }
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[4rem] gap-14 ">
                {Overviewdata?.map((e, index) => {
                    return (
                        <TiltComponent
                            key={`Newjj-${index}`}
                            {...e}
                            index={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MotionWrapper(Overview, "about")
