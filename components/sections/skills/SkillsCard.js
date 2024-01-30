import { Heading, Flex } from "@chakra-ui/react";
import ChakraBox from "../../common/ChakraBox";
import { motion } from "framer-motion";

const SkillsCard = ({ item }) => {
    return (
        <Flex
            borderWidth={"1px"}
            borderColor={"blackAlpha.200"}
            backdropFilter="auto"
            backdropBlur="2px"
            boxShadow={"xl"}
            borderRadius={"30px"}
            w={"10em"}
            h={"6em"}
            // key={item + "pyr"}
            minW={"60px"}
            alignItems={"center"}
            justifyContent={"center"}
            minH={"60px"}
            position={"relative"}
            zIndex={50}
            whileHover={{ scale: 1.1 }}
            as={motion.div}
        >
            <ChakraBox
                zIndex={50}
                position={"relative"}
                // _hover={{ scale: 2 }}
                // variants={aboutItem}
            >
                <Flex
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"full"}
                    gap={1}
                >
                    {item[1]}
                    <Heading fontSize={12} fontWeight={900}>
                        {item[0].toUpperCase()}
                    </Heading>
                </Flex>
            </ChakraBox>
        </Flex>
    );
};

export default SkillsCard;
