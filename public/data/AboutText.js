import {
    SiPython,
    SiJavascript,
    SiCplusplus,
    SiC,
    SiRuby,
    SiRubyonrails,
    SiJava,
    SiPhp,
    SiWebassembly,
    SiReact,
    SiBootstrap,
    SiJquery,
    SiVuedotjs,
    SiCss3,
    SiMysql,
    SiAmazonaws,
    SiNpm,
    SiExpress,
    SiNextdotjs,
    SiDjango,
    SiPostgresql,
    SiMongodb,
    SiGoogle,
    SiGit,
    SiDocker,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { JavascriptPlain } from "devicons-react";

const size = 42;
const aboutText = {
    background: `Hi! My full name is Linas Aleknevicius. More recently, I\'m a Computer Science graduate from McMaster University and a full-stack Software Developer with AviaPro Consulting Inc. I try to maintain an interest in all forms something, but I have a particular passion for front-end designs and implementations. There\'s just something satisfying about bridging the gap between what the developer sees and what the user experiences. A well thought out, lively interface makes the interaction feel humanized, and less of a machined process.
                \nWhen I\'m not developing something I might be bouldering or furthering my quest for the endgame mechanical keyboard. The latter of which I\'ve come to think of as a paradox by now. Ask me about the builds I have (or have had in the past)!
                \nCurrently I\'m looking for new opportunities as a developer! Hire me?`,
    skillBackground: `I always love to tinker around and explore new things. The following are a few of the ones I’ve worked with most recently: `,
    skills2: [
        ["JavaScript", <JavascriptPlain color="blackAlpha.700" size={size} />],
        ["Python", SiPython],
        ["C++", SiCplusplus],
        ["C", SiC],
        ["Ruby", SiRuby],
        ["PHP", SiPhp],
        ["Java", DiJava],
        ["WebAssembly", SiWebassembly],
        ["React", SiReact],
        ["Express.Js", SiExpress],
        ["Next.Js", SiNextdotjs],
        ["Bootstrap", SiBootstrap],
        ["Ruby on Rails", SiRubyonrails],
        ["MySQL", SiMysql],
        ["PostgresSQL", SiPostgresql],
        ["MongoDB", SiMongodb],
    ],
    languages: [
        ["JavaScript", SiJavascript],
        ["Python", SiPython],
        ["C++", SiCplusplus],
        ["C", SiC],
        ["Ruby", SiRuby],
        ["PHP", SiPhp],
        ["Java", DiJava],
        ["WebAssembly", SiWebassembly],
    ],
    frameworksDatabases: [
        ["React", SiReact],
        ["Express.Js", SiExpress],
        ["Next.Js", SiNextdotjs],
        ["Bootstrap", SiBootstrap],
        ["Ruby on Rails", SiRubyonrails],
        ["MySQL", SiMysql],
        ["PostgresSQL", SiPostgresql],
        ["MongoDB", SiMongodb],
    ],
    avpExperience: [
        [
            "Helped develop, maintain, and ship production code for internal tools and enterprise applications. Worked closely with various team branches within the company.",
        ],
    ],
};

export default aboutText;
