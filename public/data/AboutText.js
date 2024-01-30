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
    background: `Some of my fondest memories as a kid were messing around on the good ol\' family PC we had and trying to theme Windows. That quickly led me to installing some Linux distributions on it unbeknownst to my parents, and from there feasting my eyes on the terminal for the first time. I had no idea it would lead to so much more in my life at the time. \n\n Fast forward to today, and I\'m a Computer Science graduate from McMaster University and a full-stack Software Developer for AviaPro Consulting Inc. As a developer I try to constantly challenge myself and keep up all of with the fast paced advancements in the field, but I also happen to have a soft spot for front-end designs and implementations. There\'s just something satisfying about bridging the gap between what the developer sees and what the user experiences. A well thought out, lively interface makes the interaction feel humanized, and less of a machined process. I strive to achieve that. 
    \nWhen I\'m not developing something I might be bouldering or furthering my quest for the endgame mechanical keyboard. The latter of which I\'ve come to think of as a paradox by now. Ask me about the builds I have (or have had in the past)!
                    \nCurrently I\'m looking for new opportunities as a developer! Hire me?`,
    skillBackground: `I always love to tinker around and explore new things. The following are a few of the ones I’ve worked with most recently: `,
    skills: [
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
