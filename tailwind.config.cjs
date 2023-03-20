/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: ["Cabin", "sans-serif"],
            backgroundImage: {
                gradient_Violet: [
                    "linear-gradient(41deg, rgba(89,40,237,1) 30%, rgba(0,215,255,1) 90%)",
                ],
                glass_effect: [
                    "linear-gradient(144.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)",
                ],
                glass_effect2: [
                    "linear-gradient(-270.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)",
                ],
                orange_pink: [
                    "linear-gradient( 68.3deg,  rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2% )",
                ],
                gradient_border:['linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )'],
                gradient_hero:['radial-gradient(circle, rgba(14, 14, 92,0.5530987394957983) 0%, rgba(0,0,0,0) 49%)']
            },
        },
    },
    plugins: [],
}
