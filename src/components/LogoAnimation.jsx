import React from "react"
import { motion } from "framer-motion"

const draw = {
    hidden: {
        opacity: 0,
        x: -20,
        y: -20,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: { duration: 1, ease: "easeInOut" },
    },
}

const letter = {
    hidden: {
        opacity: 0,
        //  y:-50,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        // y:0,
        pathLength: 1,
        rotate: 0,
        transition: { duration: 2, ease: "easeInOut" },
    },
}

const LogoAnimation = () => {
    return (
        <span className="">
            <motion.svg
                aria-labelledby="nextjs-logo-title"
                className="next-announcements_logo__dRmJh"
                fill="none"
                height="80"
                initial="hidden"
                variants={draw}
                animate="visible"
                role="img"
                style={{ position: "relative" }}
                viewBox="0 0 80 80"
                width="80"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M66.448 70.0091L30.7298 24H24V55.9867H29.3838V30.8371L62.2218 73.2645C63.7035 72.2727 65.1152 71.1846 66.448 70.0091Z"
                    variants={letter}
                    fill="url(#paint0_linear_1766_6633)"
                ></motion.path>
                <motion.rect
                    fill="url(#paint1_linear_1766_6633)"
                    height="32"
                    width="5.33333"
                    x="51.1113"
                    variants={letter}
                    y="24"
                ></motion.rect>
                <defs>
                    <radialGradient
                        cx="0"
                        cy="0"
                        gradientTransform="translate(40) rotate(90) scale(102.857)"
                        gradientUnits="userSpaceOnUse"
                        id="paint0_radial_1766_6745"
                        r="1"
                    >
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white"></stop>
                    </radialGradient>
                    <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint1_linear_1766_6745"
                        x1="0"
                        x2="17.5"
                        y1="0"
                        y2="32.5"
                    >
                        <stop stopColor="white"></stop>
                        <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity="0"
                        ></stop>
                    </linearGradient>
                    <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_1766_6633"
                        x1="48.4444"
                        x2="64.2222"
                        y1="51.7778"
                        y2="71.3333"
                    >
                        <stop stopColor="white"></stop>
                        <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity="0"
                        ></stop>
                    </linearGradient>
                    <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint1_linear_1766_6633"
                        x1="53.778"
                        x2="53.6887"
                        y1="24"
                        y2="47.5001"
                    >
                        <stop stopColor="white"></stop>
                        <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity="0"
                        ></stop>
                    </linearGradient>
                </defs>
            </motion.svg>
        </span>
    )
}

export default LogoAnimation
