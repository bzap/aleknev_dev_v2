import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { navContainer } from "../../styles/Variants";
import Content from "./Content";
import ChakraBox from "../common/ChakraBox";

const Header = ({ ref }) => {
    return (
        <Flex justifyContent={"center"} pt={"4"}>
            <ChakraBox
                py={2}
                px={2}
                as={motion.div}
                initial={"hidden"}
                variants={navContainer}
                whileInView={"visible"}
                viewport={{ once: true }}
                backdropFilter="auto"
                backdropBlur="8px"
                w={"100%"}
                maxW={{ base: "90%", lg: "60em" }}
                position="fixed"
                zIndex={200}
                boxShadow={"lg"}
                borderRadius={"12px"}
                borderWidth={"1px"}
                borderColor={"blackAlpha.200"}
                bg="whiteAlpha.500"
                justifyContent={"center"}
            >
                {/* <Box
								display={{ 
									base: 'none', 
									sm: 'none', 
									md: 'inline', 
									lg: 'inline' 
								}}>
									{desktopContent(pos)}
							</Box> */}
                <Box display={"inline"}>
                    <Content />
                </Box>
            </ChakraBox>
        </Flex>
    );
};

export default Header;
