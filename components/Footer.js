import React from "react";
import {
    Icon,
    Link,
    chakra,
    shouldForwardProp,
    Flex,
    Button,
    Container,
    Text,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { footerItem } from "../styles/Variants";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Footer = () => {
    return (
        <Container
            w={"100%"}
            h={"100%"}
            p={0}
            position={"relative"}
            zIndex={50}
            maxW={"100%"}
        >
            <Flex w={"100%"} justifyContent={"center"}>
                <ChakraBox
                    pt={"15px"}
                    as={motion.div}
                    variants={footerItem}
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    pb={"1em"}
                    backdropFilter="auto"
                    backdropBlur="8px"
                    position="relative"
                    bottom={0}
                    borderRadius={"12px"}
                    justifyContent={"center"}
                >
                    <Flex
                        justifyContent={"center"}
                        direction={"row"}
                        alignItems={"center"}
                    >
                        <Text
                            position={"relative"}
                            color={"blackAlpha.400"}
                            fontSize={{
                                base: 11,
                                sm: 11,
                                md: 12,
                                lg: 12,
                            }}
                        >
                            Designed and developed by Linas.
                        </Text>
                    </Flex>
                    <Link
                        style={{ textDecoration: "none" }}
                        href={"https://github.com/bzap/aleknev-dev"}
                        isExternal
                    >
                        <Flex
                            position={"relative"}
                            w={"auto"}
                            justifyContent={"center"}
                            direction={"row"}
                            alignItems={"center"}
                        >
                            <Button
                                variant={"unstyled"}
                                _hover={{ bg: "blackAlpha.200" }}
                                _active={{ bg: "blackAlpha.300" }}
                                borderRadius={"lg"}
                                size={"sm"}
                            >
                                <Text
                                    px={3}
                                    position={"relative"}
                                    color={"blackAlpha.400"}
                                    fontSize={{
                                        base: 11,
                                        sm: 11,
                                        md: 12,
                                        lg: 12,
                                    }}
                                >
                                    Site Repo &gt;
                                </Text>
                            </Button>
                        </Flex>
                    </Link>
                </ChakraBox>
            </Flex>
        </Container>
    );
};

export default Footer;
