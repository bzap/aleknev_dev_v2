import { Flex, Box, useBreakpoint } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { projectContainer, gitText, about } from "../../../styles/Variants";
import { forwardRef } from "react";
import Title from "../../Title";
import VerticalItem from "./card/VerticalItem";
import GitButton from "./GitButton";
import ChakraBox from "../../common/ChakraBox";

const Projects = forwardRef((props, ref) => {
    const bp = useBreakpoint();
    return (
        <Flex justifyContent={"center"}>
            <Box
                ref={ref}
                position={"relative"}
                maxW={"60em"}
                w={"100%"}
                id="1"
                pt={{
                    base: "4em",
                    sm: "6em",
                    md: "6em",
                    lg: "6em",
                }}
                pb={{
                    base: "4em",
                    sm: "4em",
                    md: "8em",
                    lg: "8em",
                }}
            >
                <Flex justifyContent={"center"} direction={"column"}>
                    <Flex position={"relative"} justifyContent={"start"}>
                        <ChakraBox
                            as={motion.div}
                            variants={about}
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{ once: true, amount: 0.85 }}
                        >
                            <Title title={"SOME PROJECTS."} />
                        </ChakraBox>
                    </Flex>
                    <Flex
                        position={"relative"}
                        zIndex={10}
                        pt={{
                            base: "0em",
                            sm: "0em",
                            md: "1em",
                            lg: "2em",
                        }}
                        direction="column"
                        justifyContent={"center"}
                    >
                        <ChakraBox variants={projectContainer}>
                            <Flex
                                direction={"row"}
                                justifyContent={"space-between"}
                                flexDirection="flex-start"
                                sx={{ flexWrap: "wrap" }}
                            >
                                {[...Array(6).keys()].map((item, idx) => {
                                    return (
                                        <Box
                                            key={idx}
                                            display={{
                                                base: "flex",
                                                sm: "flex",
                                                md: "flex",
                                            }}
                                            w={{
                                                sm: "100%",
                                                md: "100%",
                                                lg: "45%",
                                            }}
                                            justifyContent={"center"}
                                        >
                                            {bp == "base" ||
                                            bp == "sm" ||
                                            bp == "md" ? (
                                                <VerticalItem
                                                    top={"3em"}
                                                    index={
                                                        "0" +
                                                        (idx + 1).toString()
                                                    }
                                                />
                                            ) : idx % 2 === 0 ? (
                                                <VerticalItem
                                                    top={"0%"}
                                                    index={
                                                        "0" +
                                                        (idx + 1).toString()
                                                    }
                                                />
                                            ) : (
                                                <VerticalItem
                                                    top={"35%"}
                                                    index={
                                                        "0" +
                                                        (idx + 1).toString()
                                                    }
                                                />
                                            )}
                                        </Box>
                                    );
                                })}
                            </Flex>
                        </ChakraBox>
                    </Flex>
                </Flex>
                <ChakraBox
                    as={motion.div}
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.9 }}
                    variants={gitText}
                >
                    <GitButton />
                </ChakraBox>
            </Box>
        </Flex>
    );
});

export default Projects;
