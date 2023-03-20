import React from "react"
import { motion } from "framer-motion"
import { HeroImage } from "../assets/index.js"
import { downloadFIle } from "../FIle/Exporter.js"

const Hero = () => {
    return (
        <section className="grid grid-cols-1  lg:grid-cols-2 mt-[6rem] lg:mt-[8rem] gap-20 sm:gap-0">
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: 0.2,
                }}
                className="flex-row flex gap-10  items-start"
            >
                <span className="relative bg-white flex items-center flex-col w-0">
                    <span className="w-5 bg-violet-700 h-5 rounded-full" />
                    <span className="w-2  bg-gradient-to-b from-violet-700 top-[-1px] h-[19rem] sm:h-[18rem] relative" />
                </span>

                <div className="flex flex-col gap-3 items-stretch">
                    <h1 className="text-7xl font-extrabold">
                        Hi, I'm
                        <span className="bg-gradient_Violet bg-clip-text text-transparent ml-4">
                            Nayan
                        </span>
                    </h1>
                    <span className="text-2xl">
                        I am React Developer and I make{" "}
                        <br className="hidden lg:inline-block" /> cool Website's
                        Using Framer Motion
                    </span>
                    <button
                        onClick={downloadFIle}
                        className="bg-violet-800 w-fit px-4 py-5 flex justify-center items-center rounded-lg text-[15px] mt-3 h-5"
                    >
                        Download Resume
                    </button>
                </div>
            </motion.div>

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                animate={{ y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: 0.2,
                }}
                className="w-full flex justify-center items-center relative"
            >
                <span className="w-[80rem] h-[48rem] absolute  z-5 bg-gradient_hero" />
                <img
                    src={HeroImage}
                    className="w-full object-cover z-10 "
                    alt="image not loading"
                />
            </motion.div>
        </section>
    )
}

export default Hero
