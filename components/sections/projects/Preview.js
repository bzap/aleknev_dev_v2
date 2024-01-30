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
import { motion, isValidMotionProp } from "framer-motion";
import { useRef } from "react";
import projects from "../../../public/data/ProjectText";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "./MDXComponents";
import dynamic from "next/dynamic";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

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
                <ChakraBox
                    pb={1}
                    //  variants={item}
                >
                    {projectTitle(projects[index].name)}
                </ChakraBox>
                <Flex
                    w={"100%"}
                    position={"relative"}
                    justifyContent={"space-between"}
                >
                    {projects[index].tech.map((x, idx) =>
                        projectSkill(x, projects[index].icons[idx])
                    )}
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
                <ChakraBox
                //   variants={item}
                >
                    <Center>
                        {/* <Text fontSize={11} color="red"> */}
                        {projectDesc(projects[index].desc)}
                        {/* </Text> */}
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
                    {projectButton(
                        projects[index].buttons[1],
                        projects[index].link
                    )}
                </Flex>
            </ChakraBox>
        </Stack>
    );
};

const projectImages = (props) => {
    return (
        <Image
            opacity={0.7}
            align={"center"}
            borderTopRadius={"30px"}
            h={"13em"}
            w={"full"}
            fit={"background"}
            src={props}
        />
    );
};

const projectTitle = (props) => {
    return (
        <Heading
            color={"blackAlpha.800"}
            fontWeight={900}
            fontSize={{
                base: 20,
                sm: 20,
                md: 20,
                lg: 24,
            }}
        >
            {props.toUpperCase()}
        </Heading>
    );
};

const projectSkill = (props, icon) => {
    return (
        <ChakraBox
            pt={"1"}
            key={props}
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
                    &thinsp;{props}
                </Text>
            </Center>
        </ChakraBox>
    );
};

const projectDesc = (props) => {
    return (
        <Text
            py={{
                base: 2,
                sm: 2,
                md: 2,
                lg: 2,
            }}
            as="p"
            fontWeight={700}
            lineHeight={"1.3em"}
            fontSize={{
                base: 11,
                sm: 11,
                md: 12,
                lg: 11,
            }}
            color={"gray.600"}
        >
            {props}
        </Text>
    );
};

const modalButton = (name, link) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef([]);
    return (
        <Button
            variant={"unstyled"}
            _hover={{ bg: "#e1e1e1" }}
            _active={{ bg: "#cfcfcf" }}
            borderRadius={"lg"}
            size={"sm"}
            ref={btnRef}
            onClick={onOpen}
        >
            <Heading
                py={1}
                px={3}
                color={"blackAlpha.800"}
                fontSize={{
                    base: 11,
                    sm: 11,
                    md: 12,
                    lg: 12,
                }}
            >
                {name}&#160;&gt;
            </Heading>
            {contentModal(btnRef, isOpen, onOpen, onClose, link)}
        </Button>
    );
};

const projectButton = (name, link) => {
    return (
        <Link isExternal style={{ textDecoration: "none" }} href={link}>
            <Button
                variant={"unstyled"}
                _hover={{ bg: "blackAlpha.200" }}
                _active={{ bg: "blackAlpha.300" }}
                borderRadius={"lg"}
                size={"sm"}
            >
                <Heading
                    color={"blackAlpha.800"}
                    py={1}
                    px={3}
                    fontWeight={800}
                    fontSize={{
                        base: 11,
                        sm: 11,
                        md: 12,
                        lg: 12,
                    }}
                >
                    PRESENTATION&#160;&gt;
                </Heading>
            </Button>
        </Link>
    );
};

const contentModal = (ref, io, oo, oc, link) => {
    const Content = dynamic(import(`../../../projects/${"Proj" + link}.mdx`));
    const title = projects[link].name;
    return (
        <Modal
            preserveScrollBarGap
            blockScrollOnMount
            motionPreset="slideInBottom"
            isCentered
            size={"xl"}
            onClose={oc}
            finalFocusRef={ref}
            isOpen={io}
            scrollBehavior={"inside"}
        >
            <ModalOverlay />
            <ModalContent
                borderRadius={"12px"}
                maxW={{ base: "90%", sm: "90%", md: "90%", lg: "60em" }}
            >
                <ModalHeader
                    px={{
                        base: 18,
                        sm: 18,
                        md: 18,
                        lg: 18,
                    }}
                >
                    <Heading
                        pt={{
                            base: 0,
                            sm: 0,
                            md: 1,
                            lg: 2,
                        }}
                        fontSize={{
                            base: 22,
                            sm: 22,
                            md: 22,
                            lg: 22,
                        }}
                        px={{
                            base: "0.7em",
                            sm: "0.7em",
                            md: "0.7em",
                            lg: "1.7em",
                        }}
                    >
                        {title}
                    </Heading>
                </ModalHeader>
                <Flex
                    px={{
                        base: "3.6em",
                        sm: "3.6em",
                        md: "3.6em",
                        lg: "3.6em",
                    }}
                >
                    <Divider />
                </Flex>
                <ModalCloseButton />
                <ModalBody userSelect={"none"} pt={3}>
                    <MDXProvider components={MDXComponents}>
                        <Content />
                    </MDXProvider>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default Preview;
