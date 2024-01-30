import { Flex } from "@chakra-ui/react";
import Title from "../../Title";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { about, aboutItem } from "../../../styles/Variants";
import ChakraBox from "../../common/ChakraBox";
import FormBox from "./Formbox";

const Contact = forwardRef((props, ref) => {
    return (
        <Flex justifyContent={"center"}>
            <ChakraBox
                ref={ref}
                as={motion.div}
                variants={aboutItem}
                initial={"hidden"}
                whileInView={"visible"}
                position={"relative"}
                zIndex={50}
                viewport={{ once: true }}
                maxW={"60em"}
                w={"100%"}
                id="2"
                pt={{
                    base: "6%",
                    sm: "6%",
                    md: "6%",
                    lg: "12%",
                }}
                pb={"4em"}
            >
                <Flex
                    direction={"column"}
                    gap={{
                        base: "2em",
                        sm: "2em",
                        md: "2em",
                        lg: "2em",
                    }}
                >
                    <Flex position={"relative"} alignItems={"start"}>
                        <ChakraBox
                            as={motion.div}
                            variants={about}
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <Title title={"CONTACT ME!"} />
                        </ChakraBox>
                    </Flex>
                    <ChakraBox
                        as={motion.div}
                        variants={aboutItem}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <FormBox />
                    </ChakraBox>
                </Flex>
            </ChakraBox>
        </Flex>
    );
});

export default Contact;
