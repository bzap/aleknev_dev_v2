import { Center, Icon, Text } from "@chakra-ui/react";
import ChakraBox from "../../../common/ChakraBox";

const ProjectSkill = ({ element, icon }) => {
    return (
        <ChakraBox
            pt={"1"}
            key={element}
            // variants={pskillsItem}
        >
            <Center
                bg={"blackAlpha.200"}
                py={1}
                px={{ base: 5, sm: 7, md: 2 }}
                borderRadius={"lg"}
                direction={"row"}
            >
                <Icon w={2.5} h={2.5} as={icon} color="black.500" />
                <Text
                    fontWeight={700}
                    color={"blackAlpha.800"}
                    fontSize={{
                        base: 0,
                        sm: 0,
                        md: 11,
                        lg: 11,
                    }}
                >
                    &thinsp;{element}
                </Text>
            </Center>
        </ChakraBox>
    );
};

export default ProjectSkill;
