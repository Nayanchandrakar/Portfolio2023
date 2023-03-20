import {
    overview,
    overview2,
    overview3,
    overview4,
    tesla,
    starbucks,
    shopify,
    meta,
    dallie,
    disney,
    youtube,
    walkwise,
    movix,
    image1,
    image2,
    image3,
    resume,
} from "../assets/index.js"
import FileSaver, { saveAs } from "file-saver"

const Overviewdata = [
    { title: "Web Development", image: overview },
    { title: "C programming", image: overview4 },
    { title: "Backend Development", image: overview2 },
    { title: "Payment Gateway", image: overview3 },
]

const experience = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
]

const ToolsDetails = [
    {
        toolName: "Javascript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
        toolName: "React Js",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
        toolName: "Vite Js",
        image: "https://camo.githubusercontent.com/9bd7a130627d7a7601932c6f1c17f8f3420ad85f5f2d73e0c339431e040d04e7/68747470733a2f2f766974656a732e6465762f6c6f676f2d776974682d736861646f772e706e67",
    },
    {
        toolName: "Tailwind",
        image: "https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667",
    },
    {
        toolName: "Html",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
        toolName: "Bootstrap",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    },
    {
        toolName: "C lang",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    },
    {
        toolName: "Css 3",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
        toolName: "Firebase",
        image: "https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667",
    },
    {
        toolName: "Gatsby Js",
        image: "https://camo.githubusercontent.com/ba9df1e4c5f7c9f6503f2668f03a934b4553c5840dd6067ee1ab013c2af86afc/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6761747362796a732f6761747362796a732d69636f6e2e737667",
    },
    {
        toolName: "Git",
        image: "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
    },
    {
        toolName: "MongoDB",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
        toolName: "Node JS",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
        toolName: "Zustand",
        image: "https://github.com/pmndrs/zustand/raw/main/bear.jpg",
    },
]

const projectdetails = [
    {
        image: walkwise,
        title: "An Ecommerce Shoe",
        paragraph:
            "The website itself features a minimalist design, with a predominantly black and white color scheme. The homepage includes a brief introduction of the developer.",
        site_url: "https://walkwise-walkwise-000024.netlify.app/",
        technologies: ["#react", "#tailwind", "#strapi"],
    },
    {
        image: dallie,
        title: "Dallie-2 Open Ai",
        paragraph:
            "OpenAI Stable Diffusion package to create a unique and interactive background effect. This technology has been used to create a captivating visual experience.",
        site_url: "https://dallie-2-openai-stable-diffusion.netlify.app/",
        technologies: ["#react", "#tailwind", "#openai"],
    },
    {
        image: movix,
        title: "Movix website",
        paragraph:
            "A movie review website based on tmdb api the website uses react js for the fronted with the stunning features of skeleton loading , lazy loading.",
        site_url: "https://movix-clone-hosting-6a9c7.web.app/",
        technologies: ["#react", "#scss", "#tmdb"],
    },
    {
        image: youtube,
        title: "Youtube clone",
        paragraph:
            "Real world youtube clone using react js for frontend and rapid api for data fetching with the Use of trending css library Tailwind css this website a simpler design as youtube.",
        site_url: "https://clone-372007.web.app/",
        technologies: ["#react", "#tailwind", "#rapidapi"],
    },
    {
        image: disney,
        title: "Disney + clone",
        paragraph:
            "In this website developer has integrated the login functionality by using firebase for backend and react js for frontend development.",
        site_url: "https://disneypluse.firebaseapp.com/",
        technologies: ["#react", "#styledcomp", "#firebase"],
    },
]

const TestimonialDetails = [
    {
        description:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Greg Sullivan",
        company: "WordPress Developer",
        image: image1,
    },
    {
        description:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Nuno Maduro",
        company: "Core Team Member",
        image: image2,
    },
    {
        description:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Kent C. Dodds",
        company: "DevOps Engineer & Network",
        image: image3,
    },
]

const downloadFIle = () => FileSaver.saveAs(resume, "resume.pdf")

export {
    Overviewdata,
    experience,
    ToolsDetails,
    projectdetails,
    TestimonialDetails,
    downloadFIle,
}
