import { motion, isValidMotionProp } from "framer-motion";
import { shouldForwardProp, chakra } from "@chakra-ui/react";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default ChakraBox;
