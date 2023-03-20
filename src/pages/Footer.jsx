import React from "react"
import { linkedin, twitter, facebook, instagram } from "../FIle/Exporter.js"

const Footer = () => {
    return (
        <footer className="w-full mt-[6rem] mb-[4rem]">
            <div className="flex flex-row gap-2 sm:gap-9 text-lg justify-center">
                <a className="hover:text-gray-500 transition-colors" to="/">
                    Terms Of Use
                </a>
                <a className="hover:text-gray-500 transition-colors" to="/">
                    Privacy-Policy
                </a>
                <a className="hover:text-gray-500 transition-colors" to="/">
                    About
                </a>
                <a className="hover:text-gray-500 transition-colors" to="/">
                    Blog
                </a>
                <a className="hover:text-gray-500 transition-colors" to="/">
                    FAQ
                </a>
            </div>

            <div className="flex justify-center mt-6">
                <p className="text-justify w-full max-w-3xl text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum eveniet incidunt aspernatur! At velit libero
                    praesentium voluptatum eaque! Laudantium quia iure doloribus
                    vel, suscipit eaque. Tenetur laudantium inventore modi ea
                    ipsam voluptates dicta, pariatur laborum ducimus
                    consequuntur eos cum facilis blanditiis! Odit nam nisi
                    necessitatibus dolorum quidem error corrupti iusto.
                </p>
            </div>

            <div className="flex flex-row justify-center gap-5 mt-6">
                <img src={facebook} className="w-6 invert" alt="" />
                <img src={instagram} className="w-6 invert" alt="" />
                <img src={twitter} className="w-6 invert" alt="" />
                <img src={linkedin} className="w-6 invert" alt="" />
            </div>
        </footer>
    )
}

export default Footer
