import { Flex, chakra, Icon, shouldForwardProp } from "@chakra-ui/react";
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { arrowContainer, gitGT } from "../../../styles/Variants";
import { HiChevronDown } from "react-icons/hi";
import {
    ArrowDown,
    ArrowFatDown,
    CaretCircleDown,
    ArrowCircleDown,
} from "phosphor-react";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ScrollIndicator = () => {
    return (
        <AnimatePresence mode="wait">
            <ChakraBox
                as={motion.div}
                initial={"hidden"}
                animate={"visible"}
                variants={arrowContainer}
            >
                <Flex alignItems={"center"} direction={"row"} gap={1}>
                    <ChakraBox as={motion.div} variants={gitGT}>
                        <ArrowCircleDown size={20} weight="fill" />
                    </ChakraBox>
                    <ChakraBox
                        position={"relative"}
                        as={motion.div}
                        variants={gitGT}
                    >
                        <ArrowCircleDown size={20} weight="fill" />
                    </ChakraBox>
                    <ChakraBox
                        position={"relative"}
                        as={motion.div}
                        variants={gitGT}
                    >
                        <ArrowCircleDown size={20} weight="fill" />
                    </ChakraBox>
                </Flex>
            </ChakraBox>
        </AnimatePresence>
    );
};

export default ScrollIndicator;
