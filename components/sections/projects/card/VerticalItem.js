import ChakraBox from "../../../common/ChakraBox";
import { Flex, Heading } from "@chakra-ui/react";
import Preview from "./Preview";
import { projectSubContainer } from "../../../../styles/Variants";
import { motion } from "framer-motion";

const VerticalItem = ({ top, index }) => {
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

export default VerticalItem;
