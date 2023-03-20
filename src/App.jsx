import React, { useState, useEffect } from "react"
import {
    Logo,
    Overview,
    WorkExperience,
    Hero,
    Tools,
    menu,
    Projects,
    MenuToogle,
    close,
    Testimonial,
    LogoAnimation,
    Footer,
} from "./File/Exporter.js"

const App = () => {
    const [scroll, setscroll] = useState("visible")
    const [histroyscrollY, setscrollY] = useState(0)
    const [switchstate, setswitch] = useState(false)

    const ScrollEvent = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > histroyscrollY) {
                setscroll("translate-y-[-5rem]")
                setswitch(false)
            } else {
                setscroll("translate-y-[0rem] bg-black/[0.7] backdrop-blur")
            }
        } else {
            setscroll("translate-y-[0rem]")
        }
        setscrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", ScrollEvent)
        return () => {
            window.removeEventListener("scroll", ScrollEvent)
        }
    }, [window.scrollY])

    return (
        <>
            <header
                className={`flex border-b-gray-900 border-b sticky z-50 top-0 items-center justify-between w-full px-5 sm:px-8 bg-black h-[78px] ${scroll} transition-all`}
            >
                <div className="flex items-center">
                    <a href="#">
                        <LogoAnimation />
                    </a>

                    <span className="hidden lg:flex items-center">
                        <div className="w-[2px] h-9 bg-white" />
                        <a
                            href="#"
                            className="bg-gradient_Violet bg-clip-text text-transparent ml-3 text-xl"
                        >
                            Nayan
                        </a>
                    </span>
                </div>

                <nav className="hidden sm:flex gap-8 text-white font-bold">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#project">Projects</a>
                </nav>
                <nav className="inline-block sm:hidden">
                    <img
                        src={switchstate ? close : menu}
                        onClick={() =>
                            switchstate ? setswitch(false) : setswitch(true)
                        }
                        className="w-10 h-8 invert"
                        alt=""
                    />
                </nav>
            </header>

            <main className="px-5 sm:px-8 w-full text-white overflow-hidden">
                <MenuToogle buttonState={switchstate} />
                <Hero />
                <Overview />
                <WorkExperience />
                <Tools />
                <Projects />
                <Testimonial />
                <Footer />
            </main>
        </>
    )
}

export default App
