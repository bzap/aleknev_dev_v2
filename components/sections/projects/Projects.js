import {
    Flex,
    Box,
    Heading,
    Image,
    Link,
    Icon,
    Center,
    Button,
    useBreakpoint,
    chakra,
    shouldForwardProp,
} from "@chakra-ui/react";
import Preview from "./Preview";
import { motion, isValidMotionProp } from "framer-motion";
import { IoMdReturnRight } from "react-icons/io";
import {
    projectContainer,
    gitText,
    projectSubContainer,
    about,
} from "../../../styles/Variants";
import { forwardRef } from "react";
import Title from "../../Title";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

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
                                {[...Array(6).keys()].map((item, idx) => (
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
                                        bp == "md"
                                            ? verticalItem(
                                                  "3em",
                                                  "0" + (idx + 1).toString()
                                              )
                                            : idx % 2 === 0
                                            ? verticalItem(
                                                  "0%",
                                                  "0" + (idx + 1).toString()
                                              )
                                            : verticalItem(
                                                  "35%",
                                                  "0" + (idx + 1).toString()
                                              )}
                                    </Box>
                                ))}
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
                    {gitButton()}
                </ChakraBox>
            </Box>
        </Flex>
    );
});

const verticalItem = (top, index) => {
    return (
        <ChakraBox
            position={"relative"}
            pt={top}
            variants={projectSubContainer}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.4 }}
        >
            <Flex
                w={"100%"}
                position={"relative"}
                direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "column",
                }}
                justifyContent="space-between"
                gap={{
                    base: "0em",
                    sm: "0em",
                    md: "6em",
                    lg: "0em",
                }}
            >
                <Flex position={"relative"} direction={"column"}>
                    <Heading
                        color={"blackAlpha.800"}
                        fontWeight={900}
                        fontSize={{
                            base: 20,
                            sm: 20,
                            md: 20,
                            lg: 20,
                        }}
                    >
                        {index}
                    </Heading>
                    <Heading
                        color={"blackAlpha.800"}
                        position={"relative"}
                        fontSize={20}
                        top={-5}
                    >
                        &#x5f;
                    </Heading>
                </Flex>
                <Flex
                    as={motion.div}
                    whileHover={{ scale: 1.03 }}
                    viewport={{ once: true, amount: 0.8 }}
                    flex={1}
                    position={"relative"}
                    h={"auto"}
                    justifyContent={"center"}
                    w={{
                        base: "100%",
                        sm: "24em",
                        md: "28em",
                        lg: "100%",
                    }}
                    bg={"whiteAlpha.500"}
                    borderWidth={"1px"}
                    borderColor={"blackAlpha.200"}
                    backdropFilter="auto"
                    backdropBlur="1px"
                    boxShadow={"xl"}
                    borderRadius={"30px"}
                >
                    <Preview index={index.slice(1, 2)} />
                </Flex>
            </Flex>
        </ChakraBox>
    );
};

const gitButton = () => {
    return (
        <Flex
            position={"relative"}
            zIndex={50}
            pt={{
                base: "6em",
                sm: "6em",
                md: "7em",
                lg: "5em",
            }}
            justifyContent={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "flex-end",
            }}
        >
            <ChakraBox as={motion.div}>
                <Center>
                    <Link
                        style={{ textDecoration: "none" }}
                        href={"https://github.com/bzap"}
                        isExternal
                    >
                        <Button
                            variant={"unstyled"}
                            _hover={{ bg: "blackAlpha.200" }}
                            _active={{ bg: "blackAlpha.300" }}
                            borderRadius={"lg"}
                            size={"sm"}
                        >
                            <Heading
                                px={3}
                                color={"blackAlpha.800"}
                                fontSize={{ base: 12, sm: 12, md: 12, lg: 12 }}
                                fontWeight={"bold"}
                            >
                                ... And more &gt;
                            </Heading>
                        </Button>
                    </Link>
                </Center>
            </ChakraBox>
        </Flex>
    );
};

export default Projects;
