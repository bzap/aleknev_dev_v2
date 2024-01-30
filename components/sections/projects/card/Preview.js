import {
    Center,
    Divider,
    Stack,
    Flex,
    Heading,
    Button,
    Text,
    useDisclosure,
    Image,
    Icon,
    ModalOverlay,
    Link,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Modal,
    ModalFooter,
    Spacer,
    chakra,
    shouldForwardProp,
} from "@chakra-ui/react";
import projects from "../../../../public/data/ProjectText";
import ProjectTitle from "./ProjectTitle";
import ChakraBox from "../../../common/ChakraBox";
import ProjectSkill from "./ProjectSkill";
import ProjectButton from "./ProjectButton";
import ProjectDescription from "./ProjectDescription";
import { item } from "../../../../styles/Variants";

const Preview = ({ index }) => {
    return (
        <Stack>
            <Flex
                direction={"column"}
                px={{
                    base: 6,
                    sm: 9,
                    md: 9,
                    lg: "9%",
                }}
                pt={{
                    base: 4,
                    sm: 4,
                    md: "4em",
                    lg: "2em",
                }}
                spacing={-1}
            >
                <ChakraBox pb={1}>
                    <ProjectTitle title={projects[index].name} />
                </ChakraBox>
                <Flex
                    w={"100%"}
                    position={"relative"}
                    justifyContent={"space-between"}
                >
                    {projects[index].tech.map((x, idx) => {
                        return (
                            // <div key={"lol" + x}>{x}</div>
                            <ProjectSkill
                                key={x + idx}
                                element={x}
                                icon={projects[index].icons[idx]}
                            />
                        );
                    })}
                </Flex>
            </Flex>
            <Stack
                px={{
                    base: 6,
                    sm: 9,
                    md: 9,
                    lg: "9%",
                }}
            >
                <ChakraBox variants={item}>
                    <Center>
                        <ProjectDescription desc={projects[index].desc} />
                    </Center>
                </ChakraBox>
            </Stack>
            <ChakraBox
                pb={{
                    base: 4,
                    sm: 4,
                    md: 4,
                    lg: "1em",
                }}
                px={{
                    base: "6%",
                    sm: "6%",
                    md: "6%",
                    lg: "6%",
                }}
            >
                <Flex w={"full"} justifyContent={"end"}>
                    <ProjectButton
                        name={projects[index].buttons[1]}
                        link={projects[index].link}
                    />
                </Flex>
            </ChakraBox>
        </Stack>
    );
};

export default Preview;
