import Layout from "../components/layouts/main";
import Hero from "../components/sections/hero/Hero";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Projects from "../components/sections/projects/Projects";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import { useState, useEffect, useRef } from "react";
import {
    AnimatePresence,
    motion,
    isValidMotionProp,
    useInView,
} from "framer-motion";
import LoadingWrapper from "../components/sections/hero/LoadingWrapper";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Home = () => {
    const [isLoading, setLoading] = useState(true);

    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projRef = useRef(null);
    const heroRef = useRef(null);

    return (
        <Layout>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <ChakraBox
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <LoadingWrapper />
                    </ChakraBox>
                )}
            </AnimatePresence>
            <Header />
            <Hero
                ref={heroRef}
                loading={{ states: { isLoading, setLoading } }}
            />
            <About ref={aboutRef} />
            <Projects ref={projRef} />
            <Contact ref={contactRef} />
            <Footer />
        </Layout>
    );
};

export default Home;
