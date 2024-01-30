import Layout from "../components/layouts/main";
import Hero from "../components/sections/hero/Hero";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Projects from "../components/sections/projects/Projects";
import Skills from "../components/sections/skills/Skills";
import Contact from "../components/sections/contact/Contact";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import ChakraBox from "../components/common/ChakraBox";

const Home = () => {
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projRef = useRef(null);
    const heroRef = useRef(null);

    return (
        <Layout>
            <AnimatePresence mode="wait">
                <ChakraBox
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                ></ChakraBox>
            </AnimatePresence>
            <Header />
            <Hero ref={heroRef} />
            <Projects ref={projRef} />
            <Skills ref={aboutRef} />
            <Contact ref={contactRef} />
            <Footer />
        </Layout>
    );
};

export default Home;
