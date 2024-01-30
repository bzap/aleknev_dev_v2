import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { heroContainer, scrollArrows } from "../../../styles/Variants";
import ScrollIndicator from "./ScrollIndicator";
import { forwardRef } from "react";
import Image from "next/image";
import ChakraBox from "../../common/ChakraBox";
import BackgroundText from "./BackgroundText";

const Hero = forwardRef((props, ref) => {
    return (
        <Flex id={"3"} ref={ref} w={"full"} justifyContent={"center"}>
            <Flex
                maxW={"60em"}
                position={"relative"}
                zIndex={10}
                w={"full"}
                direction={"column"}
                flex={1}
                pb={{
                    base: "4em",
                    sm: "4em",
                    md: "5em",
                    lg: "5em",
                }}
            >
                <Flex
                    position={"relative"}
                    zIndex={10}
                    h={"90vh"}
                    w={"100%"}
                    pt={{
                        base: "5em",
                        sm: "5em",
                        md: "5em",
                        lg: "0em",
                    }}
                    direction={"column"}
                >
                    <ChakraBox
                        position={"relative"}
                        zIndex={10}
                        h={"100%"}
                        w={"100%"}
                        as={motion.div}
                        variants={heroContainer}
                        display={"flex"}
                        alignItems={{
                            base: null,
                            sm: null,
                            md: "center",
                            lg: "center",
                        }}
                        justifyContent={"center"}
                        initial={"hidden"}
                        whileInView={"visible"}
                        flexDir={"column"}
                        viewport={{ once: true }}
                    >
                        <Flex flexDir={"column"}>
                            <Flex alignItems={"center"} w={"100%"} h={"100%"}>
                                <Flex
                                    // bg={"red.100"}
                                    w={"80%"}
                                    flexDir={"column"}
                                >
                                    <Heading
                                        color={"blackAlpha.800"}
                                        fontWeight={"black"}
                                        fontSize={"4em"}
                                    >
                                        LINAS
                                    </Heading>
                                    <Heading
                                        fontWeight={"black"}
                                        mt={-5}
                                        fontSize={"4em"}
                                    >
                                        ALEKNEVICIUS
                                    </Heading>
                                    <Heading
                                        pt={"0.1em"}
                                        fontSize={"1.2em"}
                                        color={"blackAlpha.600"}
                                        fontWeight={800}
                                    >
                                        Detail oriented. Driven. Flexible.
                                        Full-stack Developer.
                                    </Heading>
                                </Flex>
                                <Flex w={"20%"} pb={10} justifyContent={"end"}>
                                    <Image
                                        src={"/memoji.webp"}
                                        width={674}
                                        priority
                                        height={874}
                                    />
                                </Flex>
                            </Flex>

                            <BackgroundText />
                        </Flex>
                    </ChakraBox>
                </Flex>

                <ChakraBox
                    position={"relative"}
                    as={motion.div}
                    variants={scrollArrows}
                    initial={"hidden"}
                    whileInView={"visible"}
                >
                    <Flex pt={"2em"} justifyContent={"center"}>
                        <ScrollIndicator />
                    </Flex>
                </ChakraBox>
            </Flex>
        </Flex>
    );
});

export default Hero;
