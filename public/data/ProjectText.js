import {
    SiReact,
    SiJavascript,
    SiNpm,
    SiPython,
    SiAngular,
    SiCplusplus,
    SiOpengl,
    SiVuedotjs,
    SiAsana,
    SiAmazonaws,
    SiBookstack,
    SiWebassembly,
    SiJupyter,
    SiPastebin,
    SiHtml5,
    SiCss3,
    SiJquery,
    SiPhp,
    SiMysql,
    SiBootstrap,
} from "react-icons/si";
import { GrLanguage } from "react-icons/gr";
import { CgUiKit } from "react-icons/cg";
import { VscFileCode } from "react-icons/vsc";

const projects = {
    1: {
        name: "MRKDWN",
        tech: ["NextJS", "Tailwind", "NodeJS", "Markdown"],
        icons: [SiJavascript, SiReact, SiNpm, SiAmazonaws],
        desc: "A mobile goniometry application made for cancer survivors with limited post-treatment help.",
        buttons: ["Explanation", "Presentation"],
        link: "https://drive.google.com/file/d/1-iy6nloK2FZAIC4Aj1fYx0I8Z8pYleNR/view?usp=sharing",
    },
    2: {
        name: "WPM DOG",
        tech: ["JS", "HTML", "CSS", "JQuery"],
        icons: [SiJavascript, SiHtml5, SiCss3, SiJquery],
        desc: "A typing test website with multiple modes, and a focus on distraction-free operation. ",
        buttons: ["Explanation", "Live Link"],
        link: "https://wpm-dog.vercel.app/",
    },
    3: {
        name: "GONI-GO",
        tech: ["JS", "React Native", "NodeJS", "AWS"],
        icons: [SiJavascript, SiReact, SiNpm, SiAmazonaws],
        desc: "A mobile goniometry application made for cancer survivors with limited post-treatment help.",
        buttons: ["Explanation", "Presentation"],
        link: "https://drive.google.com/file/d/1-iy6nloK2FZAIC4Aj1fYx0I8Z8pYleNR/view?usp=sharing",
    },
    4: {
        name: "ARD UTIL",
        tech: ["Python", "PYQT6", "NLTK", "XML"],
        icons: [SiPython, CgUiKit, GrLanguage, VscFileCode],
        desc: "A toolkit that samples Amazon review data and provides recommendations based on keyword frequency.",
        buttons: ["Explanation", "GitHub Repo"],
        link: "https://github.com/bzap/ARD_Util",
    },
    5: {
        name: "P0 JKERNEL",
        tech: ["Python", "Jupyter", "P0", "WebAssembly"],
        icons: [SiPython, SiJupyter, SiPastebin, SiWebassembly],
        desc: "A custom Jupyter Notebook kernel that enables compiling and running P0 language programs.",
        buttons: ["Explanation", "Documentation"],
        link: "https://p0-files-bzap.vercel.app/",
    },
    6: {
        name: "TERRAIN GEN",
        tech: ["C++", "OpenGL", "GLUT", "libGLU"],
        icons: [SiCplusplus, SiOpengl, SiBookstack, SiAsana],
        desc: "A three dimensional terrain generator, complete with panning and rendering options.",
        buttons: ["Explanation", "GitHub Repo"],
        link: "https://github.com/bzap/terrain_gen",
    },
};

export default projects;
