import React from "react"

const MenuToogle = ({ buttonState }) => {
    return (
        <div
            className={`bg-glass_effect2 w-[8rem] h-auto fixed  justify-center  p-4 flex-col gap-3 min-h-[10rem] right-[1rem] top-[6rem] items-center rounded-lg z-60 transition-all ${
                buttonState ? "flex" : "hidden"
            }`}
        >
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
        </div>
    )
}

export default MenuToogle
