import ChakraBox from "../../common/ChakraBox";
import { Text } from "@chakra-ui/react";
import aboutText from "../../../public/data/AboutText";

const BackgroundText = () => {
    return (
        <ChakraBox
            bg={"whiteAlpha.500"}
            borderWidth={"1px"}
            borderColor={"blackAlpha.200"}
            backdropFilter="auto"
            backdropBlur="2px"
            boxShadow={"xl"}
            borderRadius={"30px"}
            mt={"3em"}
            p={"2em"}
        >
            <Text
                fontWeight={700}
                display={"inline-block"}
                wordBreak={{
                    base: "break-all",
                    sm: "break-all",
                    md: "normal",
                    lg: "normal",
                }}
                textAlign={"justify"}
                sx={{ hypens: "auto" }}
                whiteSpace={"pre-line"}
                color={"blackAlpha.700"}
                fontSize={{
                    base: 11,
                    sm: 11,
                    md: 12,
                    lg: 11.5,
                }}
            >
                {aboutText.background}
            </Text>
        </ChakraBox>
    );
};

export default BackgroundText;
